import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory'
// import directory from '../../components/directory/directory.component'

export default function hompage() {
    return (
        <div className="homepage container">
            <Directory/>
        </div>
    )
}
