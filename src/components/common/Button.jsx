import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-2 rounded-full bg-accent text-primary font-semibold hover:bg-opacity-90 transition-all ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
