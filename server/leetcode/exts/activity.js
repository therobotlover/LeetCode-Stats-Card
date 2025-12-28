import { Item } from "../item.js";

const statuses = {
  Accepted: "AC",
  "Wrong Answer": "WA",
  "Time Limit Exceeded": "TLE",
  "Memory Limit Exceeded": "MLE",
  "Output Limit Exceeded": "OLE",
  "Runtime Error": "RE",
  "Compile Error": "CE",
  "System Error": "SE",
};

const langs = {
  cpp: "C++",
  java: "Java",
  python: "Python",
  python3: "Python",
  mysql: "MySQL",
  c: "C",
  csharp: "C#",
  javascript: "JavaScript",
  ruby: "Ruby",
  bash: "Bash",
  swift: "Swift",
  golang: "Go",
  scala: "Scala",
  kotlin: "Kotlin",
  rust: "Rust",
  php: "PHP",
  typescript: "TypeScript",
  racket: "Racket",
  erlang: "Erlang",
  elixir: "Elixir",
};

export function ActivityExtension() {
  return async function Activity(generator, data, body) {
    if (generator.config.height < 300) {
      generator.config.height = 300;
    }

    const submissions = data.submissions.slice(0, 4);

    const extension = new Item("g", {
      id: "ext-activity",
      style: { transform: "translate(0px, 140px)" },
      children: [
        new Item("line", {
          attr: { x1: 30, y1: 0, x2: generator.config.width - 30, y2: 0 },
          style: { stroke: "var(--bg-1)", "stroke-width": 1, opacity: 0.5 },
        }),
        new Item("text", {
          content: "Recent Activities",
          id: "ext-activity-title",
          style: {
            transform: "translate(40px, 24px)",
            fill: "var(--text-0)",
            "font-size": "14px",
            "font-weight": 600,
            opacity: generator.config.animation !== false ? 0 : 1,
            animation:
              generator.config.animation !== false ? "fade_in 1 0.3s 1.7s forwards" : "",
          },
        }),
      ],
    });

    for (let i = 0; i < submissions.length; i++) {
      const status = statuses[submissions[i].status] || "Unknown";
      const color = status === "AC" ? "var(--color-1)" : "var(--color-3)";
      const time = new Date(submissions[i].time);
      const lang = (langs[submissions[i].lang] || submissions[i].lang).slice(0, 12);

      extension.children?.push(
        new Item("a", {
          id: `ext-activity-item-${i}`,
          attr: {
            href: `https://leetcode.${
              generator.config.site === "us" ? "com" : "cn"
            }/submissions/detail/${submissions[i].id}/`,
            target: "_blank",
          },
          style: {
            transform: `translate(0px, ${i * 26 + 58}px)`,
            animation:
              generator.config.animation !== false
                ? `fade_in 0.3s ease ${(1.8 + 0.1 * i).toFixed(2)}s 1 backwards`
                : "",
          },
          children: [
            new Item("text", {
              content: `${time.getFullYear() % 100}.${time.getMonth() + 1}.${time.getDate()}`,
              style: {
                transform: "translate(40px, 0)",
                fill: "var(--text-0)",
                "font-size": "12px",
                "alignment-baseline": "middle",
              },
            }),
            new Item("rect", {
              style: {
                transform: "translate(92px, -12px)",
                fill: color,
                width: "30px",
                height: "22px",
                rx: 5,
              },
            }),
            new Item("text", {
              content: status,
              style: {
                transform: "translate(107px, 0)",
                fill: "#fff",
                "font-size": "12px",
                "text-anchor": "middle",
                "alignment-baseline": "middle",
              },
            }),
            new Item("text", {
              content: lang,
              style: {
                transform: "translate(132px, 0)",
                fill: "var(--text-0)",
                "font-size": "12px",
                "font-weight": 600,
                "alignment-baseline": "middle",
              },
            }),
            new Item("text", {
              content: submissions[i].title,
              style: {
                transform: "translate(260px, 0)",
                fill: "var(--text-1)",
                "font-size": "12px",
                "alignment-baseline": "middle",
              },
            }),
          ],
        }),
      );
    }

    body["ext-activity"] = () => extension;
  };
}
