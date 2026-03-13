import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
    return (
        <button 
            className="relative bg-transparent border
                text-foreground hover: border-primary/50 transition-all
                duration-1000 focus:outline-none focus-visible:ring-2
                focus-visible:ring-primary focus-visible:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed group
                px-8 py-4 text-lg font-medium rounded-full overflow-visible
                animated-border"
        >
            {/* Animated SVG Border */}
            <svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                style={{overflow: "visible"}}
            >
                <path
                    d="M5 5 H195 A5 5 0 0 1 200 10 V50 A5 5 0 0 1 195 55 H5 A5 5 0 0 1 0 50 V10 A5 5 0 0 1 5 5 Z"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeDasharray="400 550"
                    strokeDashoffset="400"
                    strokeLinecap="round"
                    strokseLinejoin="round"
                    className="animated-border-path" 
                />
            </svg>
            <span className="relative z-10 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download CV
            </span>
        </button>
    );
};