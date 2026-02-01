import { useEffect, useState, useRef } from 'react';

export default function Guest() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const speakers = [
        {
            id: 1,
            name: "Dr. Arjun Mehta",
            title: "Senior Software Architect",
            company: "Google Cloud",
            expertise: "Microservices & Cloud Architecture",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
            bio: "15+ years of experience in building scalable distributed systems",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            id: 2,
            name: "Priya Sharma",
            title: "Lead Backend Engineer",
            company: "Amazon Web Services",
            expertise: "Java Spring Boot & DevOps",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
            bio: "Specializes in high-performance Java applications and CI/CD pipelines",
            gradient: "from-pink-500/20 to-orange-500/20"
        },
        {
            id: 3,
            name: "Vikram Patel",
            title: "Principal Engineer",
            company: "Microsoft Azure",
            expertise: "Full-Stack Development & AI",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
            bio: "Pioneer in integrating AI/ML with enterprise Java applications",
            gradient: "from-green-500/20 to-cyan-500/20"
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="guest"
            className="relative min-h-screen py-32 bg-black text-white overflow-hidden flex items-center"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
                        GUEST SPEAKERS
                    </h2>
                    <div className="w-20 h-1 bg-white mx-auto mb-6" />
                    <p className="text-xl md:text-2xl text-gray-400 font-light uppercase tracking-[0.3em] max-w-3xl mx-auto">
                        Learn from Industry Experts
                    </p>
                </div>

                {/* Speakers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {speakers.map((speaker, index) => (
                        <div
                            key={speaker.id}
                            className={`group relative transition-all duration-1000 ${isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Card */}
                            <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-all duration-500">
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${speaker.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-square relative">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                                    </div>


                                </div>

                                {/* Content */}
                                <div className="relative p-6 space-y-4">
                                    {/* Name */}
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-white transition-colors">
                                        {speaker.name}
                                    </h3>

                                    {/* Title & Company */}
                                    <div className="space-y-1">
                                        <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                                            {speaker.title}
                                        </p>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                                            {speaker.company}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    {/* Bio */}
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {speaker.bio}
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="pt-4 flex items-center gap-2 text-gray-500 group-hover:text-white transition-colors">
                                        <span className="text-xs uppercase tracking-wider font-semibold">
                                            Learn More
                                        </span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
