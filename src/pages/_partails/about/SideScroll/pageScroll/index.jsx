import React from 'react';
import Page from './pageScroll.styles'

export default function index({title, text, img}) {
    return (
        <Page img={img}>
            <h1 className="title">{title}</h1>
            <p>{text}</p>
        </Page>
    )
}
