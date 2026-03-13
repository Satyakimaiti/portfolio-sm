import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img 
                    src="/heroSection.jpg" 
                    alt="Hero image" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Blue Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#0492c2",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift 
                            ${15 + Math.random() * 20}s 
                            ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Software Engineer | ML Enthusiast
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] animate-fade-in animation-delay-100">
                                Solving <span className="text-primary glow-text">complex</span>
                                <br />
                                problems with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    clean code
                                </span>
                                <br />
                                and intelligent data.
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                               Hi, I'm Satyaki Maiti - a software engineer dedicated to building scalable, high-performance applications
                               that leverage the power of <span className="text-foreground">machine intelligence</span>.
                               I specialize in transforming complex data into actionable insights through
                               robust engineering and clean, maintainable code. 
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton />
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                </div>
            </div>
        </section>
    );
};

