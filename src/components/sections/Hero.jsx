import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';

const Hero = () => {
    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <Container className="text-center">
                <h1 className="text-6xl font-extrabold mb-6 leading-tight">
                    Unleash the Power of <span className="text-accent">Java</span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Join thousands of developers for the biggest Java event of the year.
                </p>
                <div className="flex justify-center gap-4">
                    <Button>Get Tickets</Button>
                    <Button className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-primary">
                        Learn More
                    </Button>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
