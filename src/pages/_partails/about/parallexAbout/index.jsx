import React from 'react';
import {v4 as uuid} from 'uuid';
import Parallax from './about.parallex.styles';
import Pimg from './Pimg';
import Section from './section';
import sectionData from './parallex.data';

export default function index() {
    const renderedSections = sectionData.map(({title, text, img}, idx) => {
        let light = (idx % 2 === 0) ? true : false
        return (
            <React.Fragment key={uuid()}>
                <Pimg img={img} title={title} />
                <Section
                    text={text}
                    light={light}
                />
            </React.Fragment>
            
        )
    })
    return (
        <Parallax>
            {renderedSections}
        </Parallax>
    )
}
