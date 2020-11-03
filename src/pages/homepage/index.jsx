import React from 'react';
import Slider from '../../components/Slider';
import Directory from '../../components/directory';
import './homepage.styles.scss';
import About from '../_partails/about';

export default function Hompage() {
    return (
        <>
            <div className="homepage container">
            <Slider/>
                <Directory/>
            </div>
            <About/>
        </>
    )
}
