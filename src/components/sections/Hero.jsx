import { useEffect, useState, useMemo } from 'react';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [visibleLines, setVisibleLines] = useState(0);


    const particles = useMemo(() =>
        [...Array(30)].map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 5 + Math.random() * 10,
            delay: Math.random() * 5
        })), []
    );

    const codeStructure = [
        { type: 'keyword', text: 'public ' },
        { type: 'keyword', text: 'class ' },
        { type: 'class', text: 'JavaVerse ' },
        { type: 'bracket', text: '{' },
        { type: 'newline' },
        { type: 'newline' },
        { type: 'indent', level: 1 },
        { type: 'keyword', text: 'public ' },
        { type: 'keyword', text: 'static ' },
        { type: 'keyword', text: 'void ' },
        { type: 'method', text: 'main' },
        { type: 'bracket', text: '(' },
        { type: 'keyword', text: 'String' },
        { type: 'bracket', text: '[] ' },
        { type: 'variable', text: 'args' },
        { type: 'bracket', text: ') {' },
        { type: 'newline' },
        { type: 'indent', level: 2 },
        { type: 'class', text: 'System' },
        { type: 'text', text: '.' },
        { type: 'variable', text: 'out' },
        { type: 'text', text: '.' },
        { type: 'method', text: 'println' },
        { type: 'bracket', text: '(' },
        { type: 'string', text: '" Welcome to Java Verse!"' },
        { type: 'bracket', text: ');' },
        { type: 'newline' },
        { type: 'newline' },
        { type: 'indent', level: 2 },
        { type: 'comment', text: '// The Ultimate Coding Experience' },
        { type: 'newline' },
        { type: 'indent', level: 2 },
        { type: 'keyword', text: 'String ' },
        { type: 'variable', text: 'event' },
        { type: 'text', text: ' = ' },
        { type: 'string', text: '"JAVA VERSE 2026"' },
        { type: 'text', text: ';' },
        { type: 'newline' },
        { type: 'indent', level: 2 },
        { type: 'keyword', text: 'boolean ' },
        { type: 'variable', text: 'isReady' },
        { type: 'text', text: ' = ' },
        { type: 'keyword', text: 'true' },
        { type: 'text', text: ';' },
        { type: 'newline' },
        { type: 'newline' },
        { type: 'indent', level: 2 },
        { type: 'keyword', text: 'if ' },
        { type: 'bracket', text: '(' },
        { type: 'variable', text: 'isReady' },
        { type: 'bracket', text: ') {' },
        { type: 'newline' },
        { type: 'indent', level: 3 },
        { type: 'class', text: 'System' },
        { type: 'text', text: '.' },
        { type: 'variable', text: 'out' },
        { type: 'text', text: '.' },
        { type: 'method', text: 'println' },
        { type: 'bracket', text: '(' },
        { type: 'string', text: '" Let\'s Code!"' },
        { type: 'bracket', text: ');' },
        { type: 'newline' },
        { type: 'indent', level: 2 },
        { type: 'bracket', text: '}' },
        { type: 'newline' },
        { type: 'indent', level: 1 },
        { type: 'bracket', text: '}' },
        { type: 'newline' },
        { type: 'bracket', text: '}' },
    ];

    const codeLines = useMemo(() => {
        const lines = [];
        let currentLine = [];

        codeStructure.forEach(token => {
            if (token.type === 'newline') {
                lines.push(currentLine);
                currentLine = [];
            } else {
                currentLine.push(token);
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine);
        }
        return lines;
    }, []);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (visibleLines < codeLines.length) {
            const timer = setTimeout(() => {
                setVisibleLines(prev => prev + 1);
            }, 120);
            return () => clearTimeout(timer);
        }
    }, [visibleLines, codeLines.length]);

    const getTokenStyle = (type) => {
        const styles = {
            keyword: { color: '#c9d1d9', fontWeight: '600' },
            class: { color: '#f0f6fc' },
            method: { color: '#ffffff', fontWeight: '500' },
            variable: { color: '#8b949e' },
            string: { color: '#a5a5a5', fontStyle: 'italic' },
            comment: { color: '#484f58', fontStyle: 'italic' },
            bracket: { color: '#6e7681' },
            text: { color: '#c9d1d9' },
            indent: {},
        };
        return styles[type] || {};
    };

    const renderToken = (token, idx) => {
        if (token.type === 'indent') {
            return <span key={idx}>{' '.repeat(token.level * 4)}</span>;
        }
        return (
            <span key={idx} style={getTokenStyle(token.type)}>
                {token.text}
            </span>
        );
    };

    return (
        <section id="home" className="relative flex flex-col items-center justify-center bg-black text-white overflow-hidden pb-24" style={{ minHeight: '140vh' }}>
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
            }} />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            opacity: 0.5,
                            animation: `float ${p.duration}s ease-in-out infinite`,
                            animationDelay: `${p.delay}s`
                        }}
                    />
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />
            <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-3xl" />

            {/* Main Content */}
            <div className={`relative z-10 flex flex-col items-center px-4 pt-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                {/* Main Title */}
                <h1 className="relative text-5xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter text-center mb-6">
                    <span className="relative inline-block">
                        <span className="absolute inset-0 blur-3xl bg-white/30" />
                        <span className="relative bg-gradient-to-b from-white via-gray-100 to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
                            JAVA
                        </span>
                    </span>
                    <span className="relative inline-block ml-3 md:ml-6">
                        <span className="absolute inset-0 blur-3xl bg-white/20" />
                        <span className="relative" style={{
                            WebkitTextStroke: '2px white',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                        }}>
                            VERSE
                        </span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-12 text-center">
                    Code • Create • Conquer
                </p>

                {/* Two Column Layout - Terminal Left, CTA Right */}
                <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 items-stretch justify-start px-4 mb-32">

                    {/* Left Side - IDE Terminal */}
                    <div className="lg:w-[65%] group relative">
                        {/* Outer Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                        {/* IDE Window */}
                        <div className="relative h-full bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                            {/* IDE Title Bar */}
                            <div className="flex items-center justify-between px-5 py-4 bg-[#161b22] border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-red-500/20" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#febc2e] hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-yellow-500/20" />
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#28c840] hover:brightness-110 transition-all cursor-pointer shadow-lg shadow-green-500/20" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#0d1117] rounded-lg border border-white/5">
                                        <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573" />
                                        </svg>
                                        <span className="text-sm text-gray-400 font-mono">JavaVerse.java</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 text-gray-600 hover:text-white transition-colors cursor-pointer">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 15l-6-6-6 6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* IDE Body */}
                            <div className="flex">
                                {/* Sidebar - File Explorer */}
                                <div className="hidden md:block w-12 bg-[#0d1117] border-r border-white/5 py-4">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-2 rounded-lg bg-white/5 text-white">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        <div className="p-2 text-gray-600 hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                                            </svg>
                                        </div>
                                        <div className="p-2 text-gray-600 hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Code Area */}
                                <div className="flex-1 p-6 md:p-8 font-mono text-sm md:text-base overflow-x-auto bg-[#0d1117]" style={{ minHeight: '400px' }}>
                                    <div className="flex">
                                        {/* Line Numbers */}
                                        <div className="select-none pr-6 text-right border-r border-white/5 mr-6" style={{ minWidth: '40px' }}>
                                            {codeLines.slice(0, visibleLines).map((_, i) => (
                                                <div key={i} className="text-gray-600 leading-7">
                                                    {i + 1}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Code Content */}
                                        <div className="flex-1">
                                            {codeLines.slice(0, visibleLines).map((line, lineIdx) => (
                                                <div key={lineIdx} className="leading-7 whitespace-pre">
                                                    {line.map((token, tokenIdx) => renderToken(token, tokenIdx))}
                                                    {lineIdx === visibleLines - 1 && visibleLines < codeLines.length && (
                                                        <span className="inline-block w-2.5 h-5 bg-white ml-0.5 animate-pulse" />
                                                    )}
                                                </div>
                                            ))}
                                            {visibleLines >= codeLines.length && (
                                                <div className="leading-7">
                                                    <span className="inline-block w-2.5 h-5 bg-white/60 animate-blink" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* IDE Status Bar */}
                            <div className="px-5 py-2.5 bg-[#161b22] border-t border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Ready
                                    </span>
                                    <span className="text-xs text-gray-600 font-mono">main</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-xs text-gray-600 font-mono">UTF-8</span>
                                    <span className="text-xs text-gray-600 font-mono">Java</span>
                                    <span className="text-xs text-gray-600 font-mono">Ln {visibleLines}, Col 1</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - CTA Panel */}
                    <div className="lg:w-[40%] flex flex-col justify-center items-center lg:items-start gap-8 py-8 lg:py-0 lg:pl-8">
                        {/* Event Info */}
                        <div className="text-center lg:text-left">
                            <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-3">GFG SRM IST Presents</p>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                The Ultimate<br />
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Coding Experience</span>
                            </h3>
                            <p className="text-gray-400 text-lg max-w-sm">
                                Join us for an immersive journey into the world of Java programming.
                            </p>
                        </div>


                        {/* Register Button */}
                        <div className="group relative">
                            {/* Animated glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-400 to-white rounded-xl blur-md opacity-40 group-hover:opacity-80 transition-all duration-500" />

                            <a
                                href="#"
                                className="relative flex items-center gap-3 bg-white text-black font-black text-lg tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Register Now</span>
                                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-xs text-gray-500 uppercase tracking-[0.25em]">Scroll</span>
                <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center pt-3">
                    <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce" />
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                    25% { transform: translateY(-30px) translateX(15px); opacity: 0.7; }
                    50% { transform: translateY(-15px) translateX(-15px); opacity: 0.3; }
                    75% { transform: translateY(-40px) translateX(8px); opacity: 0.5; }
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s infinite;
                }
            `}</style>
        </section>
    );
}