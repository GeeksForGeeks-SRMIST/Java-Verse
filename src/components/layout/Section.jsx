import React from 'react';

const Section = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 relative ${className}`}>
            {children}
        </section>
    );
};

export default Section;
