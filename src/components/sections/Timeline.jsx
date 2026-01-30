import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { TIMELINE_DATA } from '../../constants';

const Timeline = () => {
    return (
        <Section id="schedule">
            <Container>
                <h2 className="text-4xl font-bold mb-12 text-center">Event Schedule</h2>
                <div className="space-y-8">
                    {TIMELINE_DATA.map((item, index) => (
                        <div key={index} className="flex gap-4 items-start border-l-2 border-accent pl-6 ml-4">
                            <span className="text-accent font-bold min-w-[100px]">{item.time}</span>
                            <div>
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Timeline;
