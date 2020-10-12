import React from 'react'
import {Link} from 'react-router-dom';

import './footer.styles.scss'

export default function index() {
    return (
        <footer id="main-footer" className="p-2">
            <div className="container footer-container">
                <div>
                    <img src="img/logo/knightritionsforblack.png" alt="Knightritions"/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nemo repellendus laborum et impedit doloremque adipisci nobis deserunt praesentium consectetur!</p>
                </div>
                <div>
                    <h3>Email NewsLetter</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="email" name="email" placeholder="Enter Email..."/>
                        <input type="submit" value="Subscribe" className="btn btn-primary"/>
                    </form>
                </div>
                <div>
                <h3>Site Links</h3>
                    <ul className="list">
                        <li><Link to="#">Help & support</Link></li>
                        <li><Link to="#">Privacy & Policy</Link></li>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Join Our Club</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, illum!</p>
                    <Link to="#" className="btn btn-secondary">Join Now</Link>
                </div>
                <div>
                    <p>
                        Copyright &copy; 2020, All Rights Reserved
                    </p>
                </div>  
            </div>
        </footer>
        
    )
}