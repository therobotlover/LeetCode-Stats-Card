import { Item } from "../item";
import { Extension } from "../types";

const statuses: Record<string, string> = {
    Accepted: "AC",
    "Wrong Answer": "WA",
    "Time Limit Exceeded": "TLE",
    "Memory Limit Exceeded": "MLE",
    "Output Limit Exceeded": "OLE",
    "Runtime Error": "RE",
    "Compile Error": "CE",
    "System Error": "SE",
};

export function ActivityExtension(): Extension {
    return async function Activity(generator, data, body) {
        if (generator.config.height < 440) {
            generator.config.height = 440;
        }

        const submissions = data.submissions.slice(0, 3);

        const extension = new Item("g", {
            id: "ext-activity",
            style: { transform: `translate(0px, 300px)` },
            children: [
                new Item("line", {
                    attr: { x1: 30, y1: 0, x2: generator.config.width - 30, y2: 0 },
                    style: { stroke: "var(--bg-1)", "stroke-width": 1, opacity: 0.5 },
                }),
                new Item("text", {
                    content: "Recent Activities",
                    id: "ext-activity-title",
                    style: {
                        transform: `translate(40px, 24px)`,
                        fill: "var(--text-0)",
                        "font-size": "14px",
                        "font-weight": 600,
                        opacity: generator.config.animation !== false ? 0 : 1,
                        animation:
                            generator.config.animation !== false
                                ? "fade_in 1 0.3s 1.7s forwards"
                                : "",
                    },
                }),
            ],
        });

        for (let i = 0; i < submissions.length; i++) {
            const status = statuses[submissions[i].status] || "Unknown";
            const color = status === "AC" ? "var(--color-1)" : "var(--color-3)";

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
                        transform: `translate(0px, ${i * 28 + 58}px)`,
                        animation:
                            generator.config.animation !== false
                                ? `fade_in 0.3s ease ${(1.8 + 0.1 * i).toFixed(2)}s 1 backwards`
                                : "",
                    },
                    children: [
                        new Item("circle", {
                            attr: { cx: 40, cy: 0, r: 8 },
                            style: {
                                fill: color,
                                filter: "url(#glow-green)",
                            },
                        }),
                        new Item("path", {
                            attr: { d: "M -3 0 L -1 2 L 4 -4" },
                            style: {
                                transform: "translate(40px, 0px)",
                                stroke: "#fff",
                                "stroke-width": 2,
                                fill: "none",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                            },
                        }),
                        new Item("text", {
                            content: submissions[i].title,
                            style: {
                                transform: `translate(64px, 0)`,
                                fill: "var(--text-0)",
                                "font-size": "13px",
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
