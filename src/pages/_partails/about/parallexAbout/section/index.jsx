import React from 'react';
import Section from './section.style';

export default function index({light, text}) {
    return (
        <Section light={light}>
            <p>{text}</p>
        </Section>
    )
}
