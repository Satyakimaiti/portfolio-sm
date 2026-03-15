import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

const projects = [
    {
        title: "AI Code Generator",
        description:
            "Built a Generative AI tool using Llama 3 and Streamlit that translates natural language into executable code with live syntax highlighting.",
        image: "/proj1.jpg",
        tags: ["Llama 3", "Ollama", "Python", "Streamlit", "Prompt Engineering"],
        link: "#",
        github: "#",
    },
    {
        title: "Smart Agriculture App",
        description:
            "Developed a full-stack system utilizing ResNet-50 and EfficientNet models for real-time plant disease classification and soil-based crop recommendation.",
        image: "/proj2.jpg",
        tags: ["React.js", "Deep Learning", "ResNet-50", "Flask/FastAPI", "Computer Vision"],
        link: "https://smart-agriculture-red.vercel.app/",
        github: "#",
    },
    {
        title: "Human Pose Detection",
        description:
            "Implemented a computer vision system that leverages specialized neural networks to track and analyze human skeletal landmarks for real-time motion assessment.",
        image: "/proj3.png",
        tags: ["OpenCV", "Mediapipe", "Computer Vision", "Python", "Neural Networks"],
        link: "#",
        github: "#",
    },
    {
        title: "Movie Recommendation System",
        description:
            "Engineered a personalized discovery engine using collaborative and content-based filtering to analyze user preferences and predict high-accuracy movie matches.",
        image: "/proj4.png",
        tags: ["Python", "Scikit-Learn", "Pandas", "Collaborative Filtering", "Data Science"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-ceneter mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A curated selection of projects that demonstrate my expertise in 
                        AI, machine learning, and software development, showcasing my ability 
                        to solve complex problems and create innovative solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-o
                                    bg-linear-to-t from-card via-card/50
                                    to-transparent opacity-60" 
                                />
                            </div>

                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href={project.link} 
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <ArrowUpRight className="w-5 h-5" />
                                </a> 
                                 <a
                                    href={project.github}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>  

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight 
                                        className="w-5 h-5
                                        text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                        {tag}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton onClick={() => window.open('https://github.com/Satyakimaiti', '_blank')}>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};

