import { Theme } from "./_theme";

export default Theme({
    palette: {
        bg: [
            "rgba(46, 58, 82, 0.82)",
            "rgba(82, 96, 130, 0.55)",
            "rgba(190, 210, 245, 0.45)",
            "rgba(255, 255, 255, 0.6)",
        ],
        text: ["#ffffff", "rgba(255, 255, 255, 0.72)"],
        color: ["#6bb8ff", "#7adf8a", "#f5b25a", "#f26b6b"],
    },
    css:
        ":root{--bar-text:#ffffff}" +
        "#background{fill:url(#card-gradient)}" +
        "#glass-sheen{opacity:0.4}" +
        "#glass-vignette{opacity:0.55}" +
        "#glass-ambient{opacity:0.7}" +
        "#glass-top{opacity:0.4}" +
        "#total-solved-ring{stroke:url(#gauge-gradient)}" +
        "#easy-solved-bg,#medium-solved-bg,#hard-solved-bg{fill:url(#bar-track-gradient);opacity:0.9}" +
        "#easy-solved-progress{fill:url(#bar-easy-gradient)}" +
        "#medium-solved-progress{fill:url(#bar-medium-gradient)}" +
        "#hard-solved-progress{fill:url(#bar-hard-gradient)}" +
        "#easy-solved-count,#medium-solved-count,#hard-solved-count{fill:rgba(255,255,255,0.85)}",
});
