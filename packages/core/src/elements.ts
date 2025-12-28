import { Item, svg_attrs } from "./item";
import { Config, FetchedData } from "./types";

const GAUGE_RADIUS = 34;
const GAUGE_CENTER_X = 50;
const GAUGE_CENTER_Y = 72;

export function Root(config: Config, data: FetchedData) {
    return new Item("svg", {
        id: "root",
        attr: {
            width: config.width,
            height: config.height,
            viewBox: `0 0 ${config.width} ${config.height}`,
            ...svg_attrs,
        },
        style: { fill: "none" },
        children: [
            new Item("title", {
                content: `${data?.profile.username || config.username} | LeetCode Stats Card`,
            }),
            new Item("style", {
                id: "default-colors",
                content: `svg{opacity:0}:root{--bg-0:#fff;--bg-1:#e5e5e5;--bg-2:#d3d3d3;--bg-3:#d3d3d3;--text-0:#000;--text-1:#808080;--text-2:#808080;--text-3:#808080;--color-0:#ffa116;--color-1:#5cb85c;--color-2:#f0ad4e;--color-3:#d9534f;--bar-text:#fff}`,
            }),
            new Item("defs", {
                children: [
                    new Item("linearGradient", {
                        id: "glass-sheen-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "1" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "rgba(255,255,255,0.45)" },
                            }),
                            new Item("stop", {
                                attr: {
                                    offset: "55%",
                                    "stop-color": "rgba(255,255,255,0.12)",
                                },
                            }),
                            new Item("stop", {
                                attr: {
                                    offset: "100%",
                                    "stop-color": "rgba(255,255,255,0)",
                                },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "glass-top-gradient",
                        attr: { x1: "0", y1: "0", x2: "0", y2: "1" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "rgba(255,255,255,0.45)" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "rgba(255,255,255,0)" },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "card-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "1" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "var(--bg-0)" },
                            }),
                            new Item("stop", {
                                attr: { offset: "60%", "stop-color": "var(--bg-1)" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "var(--bg-0)" },
                            }),
                        ],
                    }),
                    new Item("radialGradient", {
                        id: "card-vignette",
                        attr: { cx: "70%", cy: "80%", r: "80%" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "rgba(0,0,0,0)" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "rgba(0,0,0,0.35)" },
                            }),
                        ],
                    }),
                    new Item("radialGradient", {
                        id: "glass-ambient-gradient",
                        attr: { cx: "82%", cy: "88%", r: "75%" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "rgba(120,70,160,0.35)" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "rgba(120,70,160,0)" },
                            }),
                        ],
                    }),
                    new Item("filter", {
                        id: "glass-shadow",
                        attr: {
                            x: "-20%",
                            y: "-20%",
                            width: "140%",
                            height: "140%",
                        },
                        children: [
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "8",
                                    stdDeviation: "10",
                                    "flood-color": "rgba(10,20,30,0.35)",
                                },
                            }),
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "18",
                                    "flood-color": "rgba(80,140,255,0.35)",
                                },
                            }),
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "22",
                                    "flood-color": "rgba(180,120,255,0.25)",
                                },
                            }),
                        ],
                    }),
                    new Item("filter", {
                        id: "glow-blue",
                        attr: { x: "-50%", y: "-50%", width: "200%", height: "200%" },
                        children: [
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "6",
                                    "flood-color": "rgba(90,170,255,0.8)",
                                },
                            }),
                        ],
                    }),
                    new Item("filter", {
                        id: "glow-green",
                        attr: { x: "-50%", y: "-50%", width: "200%", height: "200%" },
                        children: [
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "5",
                                    "flood-color": "rgba(120,230,150,0.75)",
                                },
                            }),
                        ],
                    }),
                    new Item("filter", {
                        id: "glow-amber",
                        attr: { x: "-50%", y: "-50%", width: "200%", height: "200%" },
                        children: [
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "5",
                                    "flood-color": "rgba(255,180,90,0.75)",
                                },
                            }),
                        ],
                    }),
                    new Item("filter", {
                        id: "glow-red",
                        attr: { x: "-50%", y: "-50%", width: "200%", height: "200%" },
                        children: [
                            new Item("feDropShadow", {
                                attr: {
                                    dx: "0",
                                    dy: "0",
                                    stdDeviation: "5",
                                    "flood-color": "rgba(255,110,110,0.75)",
                                },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "gauge-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "0" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "#5cb0ff" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "#8cd4ff" },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "bar-easy-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "0" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "#49c26b" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "#8de88f" },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "bar-medium-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "0" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "#f59e3b" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "#ffd16b" },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "bar-hard-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "0" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "#f05b5b" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "#ff8a8a" },
                            }),
                        ],
                    }),
                    new Item("linearGradient", {
                        id: "bar-track-gradient",
                        attr: { x1: "0", y1: "0", x2: "1", y2: "0" },
                        children: [
                            new Item("stop", {
                                attr: { offset: "0%", "stop-color": "rgba(255,255,255,0.35)" },
                            }),
                            new Item("stop", {
                                attr: { offset: "100%", "stop-color": "rgba(255,255,255,0.15)" },
                            }),
                        ],
                    }),
                ],
            }),
            new Item("rect", {
                id: "background",
                attr: {
                    width: config.width - 2,
                    height: config.height - 2,
                    rx: "22px",
                    filter: "url(#glass-shadow)",
                },
                style: {
                    transform: "translate(1px, 1px)",
                    stroke: "var(--bg-2)",
                    fill: "var(--bg-0)",
                    "stroke-width": 1,
                },
            }),
            new Item("rect", {
                id: "glass-ambient",
                attr: {
                    width: config.width - 4,
                    height: config.height - 4,
                    rx: "20px",
                },
                style: {
                    transform: "translate(2px, 2px)",
                    fill: "url(#glass-ambient-gradient)",
                    opacity: 0.7,
                },
            }),
            new Item("rect", {
                id: "glass-vignette",
                attr: {
                    width: config.width - 4,
                    height: config.height - 4,
                    rx: "20px",
                },
                style: {
                    transform: "translate(2px, 2px)",
                    fill: "url(#card-vignette)",
                    opacity: 0.5,
                },
            }),
            new Item("rect", {
                id: "glass-top",
                attr: {
                    width: config.width - 4,
                    height: Math.round(config.height * 0.42),
                    rx: "20px",
                },
                style: {
                    transform: "translate(2px, 2px)",
                    fill: "url(#glass-top-gradient)",
                    opacity: 0.4,
                },
            }),
            new Item("rect", {
                id: "glass-inner-border",
                attr: {
                    width: config.width - 8,
                    height: config.height - 8,
                    rx: "18px",
                },
                style: {
                    transform: "translate(4px, 4px)",
                    stroke: "rgba(255,255,255,0.28)",
                    "stroke-width": 1,
                    fill: "none",
                },
            }),
            new Item("rect", {
                id: "glass-sheen",
                attr: {
                    width: config.width - 4,
                    height: config.height - 4,
                    rx: "20px",
                },
                style: {
                    transform: "translate(2px, 2px)",
                    fill: "url(#glass-sheen-gradient)",
                    opacity: 0.45,
                },
            }),
            new Item("rect", {
                id: "glass-border",
                attr: {
                    width: config.width - 2,
                    height: config.height - 2,
                    rx: "22px",
                },
                style: {
                    transform: "translate(1px, 1px)",
                    stroke: "var(--bg-3)",
                    "stroke-width": 1,
                    fill: "none",
                    opacity: 0.8,
                },
            }),
        ],
    });
}

export function Icon() {
    const item = new Item("g", {
        id: "icon",
        style: {
            transform: "translate(20px, 15px) scale(0.27)",
        },
    });

    item.children = [
        new Item("g", {
            style: {
                stroke: "none",
                fill: "var(--text-0)",
                "fill-rule": "evenodd",
            },
            children: [
                new Item("path", {
                    id: "C",
                    attr: {
                        d: "M67.506,83.066 C70.000,80.576 74.037,80.582 76.522,83.080 C79.008,85.578 79.002,89.622 76.508,92.112 L65.435,103.169 C55.219,113.370 38.560,113.518 28.172,103.513 C28.112,103.455 23.486,98.920 8.227,83.957 C-1.924,74.002 -2.936,58.074 6.616,47.846 L24.428,28.774 C33.910,18.621 51.387,17.512 62.227,26.278 L78.405,39.362 C81.144,41.577 81.572,45.598 79.361,48.342 C77.149,51.087 73.135,51.515 70.395,49.300 L54.218,36.217 C48.549,31.632 38.631,32.262 33.739,37.500 L15.927,56.572 C11.277,61.552 11.786,69.574 17.146,74.829 C28.351,85.816 36.987,94.284 36.997,94.294 C42.398,99.495 51.130,99.418 56.433,94.123 L67.506,83.066 Z",
                    },
                    style: {
                        fill: "#FFA116",
                        "fill-rule": "nonzero",
                    },
                }),
                new Item("path", {
                    id: "L",
                    attr: {
                        d: "M49.412,2.023 C51.817,-0.552 55.852,-0.686 58.423,1.722 C60.994,4.132 61.128,8.173 58.723,10.749 L15.928,56.572 C11.277,61.551 11.786,69.573 17.145,74.829 L36.909,94.209 C39.425,96.676 39.468,100.719 37.005,103.240 C34.542,105.760 30.506,105.804 27.990,103.336 L8.226,83.956 C-1.924,74.002 -2.936,58.074 6.617,47.846 L49.412,2.023 Z",
                    },
                    style: {
                        fill: "#000000",
                    },
                }),
                new Item("path", {
                    id: "dash",
                    attr: {
                        d: "M40.606,72.001 C37.086,72.001 34.231,69.142 34.231,65.614 C34.231,62.087 37.086,59.228 40.606,59.228 L87.624,59.228 C91.145,59.228 94,62.087 94,65.614 C94,69.142 91.145,72.001 87.624,72.001 L40.606,72.001 Z",
                    },
                    style: {
                        fill: "#B3B3B3",
                    },
                }),
            ],
        }),
    ];

    return item;
}

export function Username(username: string, site: string, width: number) {
    const item = new Item("a", {
        id: "username",
        attr: {
            href:
                username === "User Not Found"
                        ? "https://github.com/ShaonMajumder/LeetCode-Stats-Card"
                    : `https://leetcode.${site === "us" ? "com" : "cn"}/${username}/`,
            target: "_blank",
        },
        style: {
            transform: "translate(82px, 28px)",
        },
        children: [
            new Item("text", {
                id: "username-text",
                content: username,
                style: {
                    fill: "#ffffff",
                    "font-size": "20px",
                    "font-weight": 700,
                    "text-anchor": "start",
                },
            }),
        ],
    });

    return item;
}

export function Ranking(ranking: number, width: number) {
    const item = new Item("text", {
        id: "ranking",
        content: "#" + ranking.toString(),
        style: {
            transform: `translate(${width - 20}px, 28px)`,
            fill: "var(--text-1)",
            "font-size": "12px",
            "font-weight": 600,
            "text-anchor": "end",
            opacity: 0.7,
        },
    });

    return item;
}

export function TotalSolved(total: number, solved: number, width: number) {
    const centerX = GAUGE_CENTER_X;
    const centerY = GAUGE_CENTER_Y;
    const ratio = total > 0 ? solved / total : 0;
    const progress = Math.max(0, Math.min(1, ratio));
    const circumference = 2 * Math.PI * GAUGE_RADIUS;
    return new Item("g", {
        id: "total-solved",
        children: [
            new Item("circle", {
                id: "total-solved-bg",
                attr: { cx: centerX, cy: centerY, r: GAUGE_RADIUS },
                style: {
                    stroke: "var(--bg-1)",
                    "stroke-width": "6px",
                    fill: "none",
                    opacity: 0.7,
                },
            }),
            new Item("circle", {
                id: "total-solved-ring",
                attr: { cx: centerX, cy: centerY, r: GAUGE_RADIUS },
                style: {
                    fill: "none",
                    "stroke-dasharray": `${(circumference * progress).toFixed(2)} 10000`,
                    stroke: "var(--color-0)",
                    "stroke-width": "6px",
                    "stroke-linecap": "round",
                    transform: "rotate(-90deg)",
                    "transform-origin": `${centerX}px ${centerY}px`,
                },
            }),
            new Item("text", {
                content: solved.toString(),
                id: "total-solved-text",
                style: {
                    transform: `translate(${centerX}px, ${centerY + 4}px)`,
                    "font-size": "28px",
                    "alignment-baseline": "middle",
                    "text-anchor": "middle",
                    fill: "#ffffff",
                    "font-weight": 700,
                },
            }),
        ],
    });
}

export function Solved(problem: FetchedData["problem"], width: number) {
    const barX = 130;
    const barWidth = Math.max(220, width - 170);
    const barHeight = 18;
    const rowGap = 24;
    const startY = 50;

    const group = new Item("g", {
        id: "solved",
    });

    const difficulties = ["easy", "medium", "hard"] as const;
    const colors = [
        "url(#bar-easy-gradient)",
        "url(#bar-medium-gradient)",
        "url(#bar-hard-gradient)",
    ] as const;
    const glows = ["url(#glow-green)", "url(#glow-amber)", "url(#glow-red)"] as const;
    for (let i = 0; i < difficulties.length; i++) {
        const ratio =
            problem[difficulties[i]].total > 0
                ? problem[difficulties[i]].solved / problem[difficulties[i]].total
                : 0;
        const y = startY + i * rowGap;

        group.children?.push(
            new Item("g", {
                id: `${difficulties[i]}-solved`,
                children: [
                    new Item("rect", {
                        id: `${difficulties[i]}-solved-bg`,
                        attr: {
                            x: barX,
                            y,
                            width: barWidth,
                            height: barHeight,
                            rx: barHeight / 2,
                        },
                        style: {
                            fill: "rgba(255,255,255,0.18)",
                            stroke: "rgba(255,255,255,0.25)",
                            "stroke-width": 1,
                        },
                    }),
                    new Item("rect", {
                        id: `${difficulties[i]}-solved-progress`,
                        attr: {
                            x: barX,
                            y,
                            width: Math.max(barHeight, Math.round(barWidth * ratio)),
                            height: barHeight,
                            rx: barHeight / 2,
                        },
                        style: {
                            fill: colors[i],
                            filter: glows[i],
                        },
                    }),
                    new Item("text", {
                        id: `${difficulties[i]}-solved-type`,
                        style: {
                            transform: `translate(${barX + 12}px, ${y + barHeight / 2}px)`,
                            fill: "#ffffff",
                            "font-size": "13px",
                            "font-weight": 600,
                            "alignment-baseline": "middle",
                        },
                        content: difficulties[i][0].toUpperCase() + difficulties[i].slice(1),
                    }),
                    new Item("text", {
                        id: `${difficulties[i]}-solved-count`,
                        style: {
                            transform: `translate(${barX + barWidth - 6}px, ${y + barHeight / 2}px)`,
                            fill: "var(--text-1)",
                            "font-size": "12px",
                            "font-weight": 600,
                            "text-anchor": "end",
                            "alignment-baseline": "middle",
                        },
                        content: `${problem[difficulties[i]].solved} / ${
                            problem[difficulties[i]].total
                        }`,
                    }),
                ],
            }),
        );
    }

    return group;
}

export const selectors = [
    "#root",
    "#background",
    "#icon",
    "#L",
    "#C",
    "#dash",
    "#username",
    "#username-text",
    "#ranking",
    "#glass-sheen",
    "#glass-border",
    "#total-solved",
    "#total-solved-bg",
    "#total-solved-ring",
    "#total-solved-text",
    "#solved",
    "#easy-solved",
    "#easy-solved-type",
    "#easy-solved-count",
    "#easy-solved-bg",
    "#easy-solved-progress",
    "#medium-solved",
    "#medium-solved-type",
    "#medium-solved-count",
    "#medium-solved-bg",
    "#medium-solved-progress",
    "#hard-solved",
    "#hard-solved-type",
    "#hard-solved-count",
    "#hard-solved-bg",
    "#hard-solved-progress",
] as const;

export function Gradient(id: string, colors: Record<string, string>, ratio = 0) {
    return new Item("linearGradient", {
        id,
        attr: {
            x1: 0,
            y1: 0,
            x2: Math.round(Math.cos(ratio) * 100) / 100,
            y2: Math.round(Math.sin(ratio) * 100) / 100,
        },
        children: Object.entries(colors)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([offset, color]) => {
                return new Item("stop", { attr: { offset, "stop-color": color } });
            }),
    });
}
