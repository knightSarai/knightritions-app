import React from 'react'
import Slider from '../../components/Slider'
import Directory from '../../components/directory'
import './homepage.styles.scss'

export default function hompage() {
    return (
        <>
            <Slider/>
            <div className="homepage container">
                <Directory/>
            </div>
        </>
    )
}
