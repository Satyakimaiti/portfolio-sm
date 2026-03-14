import { BarChart3, BrainCircuit, CodeXml, Layers, Sparkles } from "lucide-react";

const highlights = [
    {
        icon: CodeXml,
        title: "Engineering Core",
        description: "Developing high-performance software with a focus on optimized algorithms and scalable architecture.",
    },
    {
        icon: Layers,
        title: "Full Stack Dev",
        description: "Building end-to-end web applications using React.js, modern JavaScript, and responsive design.",
    },
    {
        icon: BrainCircuit,
        title: "Machine Intelligence",
        description: "Architecting Deep Learning models for real-time image classification and predictive analytics.",
    },
    {
        icon: Sparkles,
        title: "Generative AI",
        description: "Engineering custom LLM tools using Llama 3 for automated, natural language code generation.",
    },
    {
        icon: BarChart3,
        title: "Data Strategy",
        description: "Translating complex datasets into actionable insights using Python, SQL, and Power BI.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Turning sophisticated algorithms
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                into seamless user experiences.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                            I am a final-year Computer Science Engineering student 
                            driven by a passion for building intelligent software 
                            that solves real-world challenges. My focus lies at the 
                            intersection of robust software architecture and machine intelligence, 
                            where I strive to turn complex data into functional, high-performance applications. 
                            </p>
                            <p>
                            On the engineering side, I specialize in full-stack development 
                            using React.js, JavaScript, and modern CSS. I have experience 
                            building end-to-end solutions, from custom Generative AI tools 
                            using Llama 3 to interactive web platforms. I prioritize writing 
                            clean, maintainable code to ensure that every project is scalable and user-centric. 
                            </p>
                            <p>
                            My technical expertise extends into Machine Learning and Data Analytics, 
                            where I develop deep learning models for image classification and 
                            predictive insights. By leveraging tools like Python, SQL, and Power BI, 
                            I bridge the gap between raw data and actionable intelligence, creating systems 
                            that learn, adapt, and provide meaningful value. 
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                            I am a Software Engineer who treats code as a craft and data as a 
                            storyteller. By merging the precision of robust backend engineering 
                            with the predictive power of Machine Learning, I build intelligent systems 
                            that don't just process information—they understand it. 
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

