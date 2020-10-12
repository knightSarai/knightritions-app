import React from 'react'
import {Link} from 'react-router-dom';

import './footer.styles.scss'

export default function index({history}) {
    return (
        <footer id="main-footer" className="p-2">
            <div className="container footer-container">
                <div>
                    <img src="img/logo/knightritionsforblack.png" alt="Knightritions"/>
                    <p>Whether you’re an elite athlete, weekend warrior, or just trying to stay healthy — we believe in growing stronger together. From essential nutrition to cutting-edge formulas, we’ve got your fit.</p>
                </div>
                <div>
                    <h3>Don't miss new offers!</h3>
                    <p>NO SPAM :)</p>
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
                    <h2>Take a look</h2>
                    <p>choose your fit from our store</p>
                    <Link to="/shop"  className="btn btn-secondary" >shop now</Link>
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