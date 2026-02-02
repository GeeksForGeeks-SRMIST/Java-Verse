import { useEffect, useState, useRef } from 'react';

export default function About() {
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

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen py-32 bg-white text-black overflow-hidden flex items-center"
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4">
                        ABOUT
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto" />
                </div>

                {/* Main Content */}
                <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Description */}
                    <div className="text-center mb-16">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                            This workshop is structured to introduce participants to{' '}
                            <span className="font-bold text-black">full-stack development using Java</span>,
                            with a strong emphasis on practical implementation and problem-solving.
                        </p>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Participants will gain exposure to backend development, frontend integration,
                            and application architecture—skills that are essential for{' '}
                            <span className="font-bold text-black">internships, projects, and placements</span>.
                        </p>
                    </div>

                    {/* Sleek Divider Line */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-black/30 to-transparent mb-16" />

                    {/* Event Details */}
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                        {/* Venue, Time, Date - Sleek Horizontal */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mb-16">
                            {/* Venue */}
                            <div className="text-center px-12">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3">Venue</p>
                                <p className="text-3xl md:text-4xl font-black tracking-tight">TP1 404/405</p>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-16 bg-black/20" />
                            <div className="md:hidden w-24 h-px bg-black/20" />

                            {/* Time */}
                            <div className="text-center px-12">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3">Time</p>
                                <p className="text-3xl md:text-4xl font-black tracking-tight">08:30 AM</p>
                            </div>

                            {/* Vertical Divider */}
                            <div className="hidden md:block w-px h-16 bg-black/20" />
                            <div className="md:hidden w-24 h-px bg-black/20" />

                            {/* Date */}
                            <div className="text-center px-12">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3">Date</p>
                                <p className="text-3xl md:text-4xl font-black tracking-tight">11th Feb 2026</p>
                            </div>
                        </div>

                        {/* Sleek Divider Line */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/30 to-transparent mb-16" />

                        {/* Contact Section */}
                        <div className="text-center">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-8">For More Information</p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
                                <a href="tel:8491012458" className="group text-center">
                                    <p className="text-sm font-semibold text-gray-500 group-hover:text-black transition-colors mb-1">Neelanjana</p>
                                    <p className="text-2xl md:text-3xl font-black group-hover:text-gray-600 transition-colors tracking-wide">
                                        84910 12458
                                    </p>
                                </a>

                                {/* Divider */}
                                <div className="hidden sm:block w-px h-12 bg-black/20" />

                                <a href="tel:9263230197" className="group text-center">
                                    <p className="text-sm font-semibold text-gray-500 group-hover:text-black transition-colors mb-1">Raj</p>
                                    <p className="text-2xl md:text-3xl font-black group-hover:text-gray-600 transition-colors tracking-wide">
                                        92632 30197
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}