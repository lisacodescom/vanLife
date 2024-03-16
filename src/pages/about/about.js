import React from "react"
import './about.scss'
import { Link } from "react-router-dom"

 const About=()=> {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. </p>

            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/">Explore our vans</Link>
            </div>
        </div>
    );
}
export default About