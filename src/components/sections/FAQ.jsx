import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';

const FAQ = () => {
    return (
        <Section id="faq">
            <Container>
                <h2 className="text-4xl font-bold mb-12 text-center">FAQ</h2>
                {/* FAQ items will go here */}
                <p className="text-center text-gray-400">Frequently Asked Questions loading...</p>
            </Container>
        </Section>
    );
};

export default FAQ;
