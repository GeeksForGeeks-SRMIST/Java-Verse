import React from 'react';

const InputField = ({ type = "text", placeholder, className = '' }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full bg-white bg-opacity-5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors ${className}`}
        />
    );
};

export default InputField;
