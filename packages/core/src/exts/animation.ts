import { selectors } from "../elements";
import { Extension } from "../types";

const keyframe = `@keyframes fade_in{from{opacity:0}to{opacity:1}}`;
const GAUGE_RADIUS = 64;
const GAUGE_START_DEG = 210;
const GAUGE_END_DEG = -30;
const ARC_SPAN_DEG = (GAUGE_END_DEG - GAUGE_START_DEG + 360) % 360;
const ARC_LENGTH = (ARC_SPAN_DEG * Math.PI * GAUGE_RADIUS) / 180;

const order: (typeof selectors)[number][] = [
    "#icon",
    "#username",
    "#ranking",
    "#total-solved-bg",
    "#total-solved-ring",
    "#total-solved-text",
    "#easy-solved-type",
    "#easy-solved-count",
    "#easy-solved-bg",
    "#easy-solved-progress",
    "#medium-solved-type",
    "#medium-solved-count",
    "#medium-solved-bg",
    "#medium-solved-progress",
    "#hard-solved-type",
    "#hard-solved-count",
    "#hard-solved-bg",
    "#hard-solved-progress",
];

export function AnimationExtension(): Extension {
    return async function Animation(generator, data, body, styles) {
        if (generator.config.animation === false) {
            return;
        }

        const speed = 1;

        let css = keyframe;
        for (let i = 0; i < order.length; i++) {
            css += `${order[i]}{opacity:0;animation:fade_in ${0.3 / speed}s ease ${(
                0.1 * i
            ).toFixed(2)}s 1 forwards}`;
        }

        const [total, solved] = (["easy", "medium", "hard"] as const).reduce(
            (acc, level) => [
                acc[0] + data.problem[level].total,
                acc[1] + data.problem[level].solved,
            ],
            [0, 0],
        );

        const ratio = total > 0 ? solved / total : 0;
        css += circle("#total-solved-ring", ARC_LENGTH * ratio, 0.7);

        styles.push(css);
    };
}

function circle(selector: string, len = 0, delay = 0) {
    const R = Math.floor(Math.random() * 1000);
    const animation = `@keyframes circle_${R}{0%{opacity:0;stroke-dasharray:0 1000}50%{opacity:1}100%{opacity:1;stroke-dasharray:${len} 10000}}`;
    const style = `${selector}{animation:circle_${R} 1.2s ease ${delay}s 1 forwards}`;
    return animation + style;
}
