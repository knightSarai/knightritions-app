import React from 'react';
import Section from './section.style';

export default function index({light, title, text}) {
    return (
        <Section light={light}>
            <h2>{title}</h2>
            <p>{text}</p>
        </Section>
    )
}
