import React from "react";
import "../Styles/About.css";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function About() {
    return (
        <>
            <Navbar />
            <div className="about">
                <div className="abouthero">
                    <h1>About Dezy Hub</h1>
                    <p>Your creative partner in digital experiences</p>
                </div>
                <div className="aboutcontent">
                    <section>
                        <h2>Who We Are</h2>
                        <p>
                            Dezy Hub is a creative digital platform focused on building modern,
                            user-friendly and visually appealing web experiences. We believe in
                            clean design, simple solutions, and meaningful technology.
                        </p>
                    </section>

                    <section>
                        <h2>What We Do</h2>
                        <ul>
                            <li>Web Design & Development</li>
                            <li>UI / UX Design</li>
                            <li>Creative Branding</li>
                            <li>Modern Frontend Solutions</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Our Vision</h2>
                        <p>
                            Our vision is to help individuals and businesses bring their ideas
                            to life through powerful design and reliable technology — without
                            unnecessary complexity.
                        </p>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default About;