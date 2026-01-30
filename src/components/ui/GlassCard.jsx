import React from 'react';

const GlassCard = ({ children, className = '' }) => {
    return (
        <div className={`bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 rounded-xl p-6 ${className}`}>
            {children}
        </div>
    );
};

export default GlassCard;
