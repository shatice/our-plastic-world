import React from "react";
import './about.scss';

const About = () => {
    return(
        <div className="about">
            <h1 className="first__title">Our plastic world</h1>
            <h2 className="second__title">À PROPOS</h2>
            <h3 className="third__title">Une visualisation interactive des données de pollution plastique</h3>
            <p className="first__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est orci quisque fames. Elementum in viverra vel mollis vitae eget bibendum duis elit. Praesent lorem est eget eget enim pellentesque rhoncus nunc, morbi. Iaculis blandit vel nunc pharetra sed magna orci.</p>
            <div className="container__four--one">
                <div className="one__text">
                    <h4 className="four__title">Lorem ipsum</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est orci quisque fames. Elementum in viverra vel mollis vitae eget bibendum duis elit</p>
                </div>
                <div className="one__text">
                    <h4 className="four__title">Lorem ipsum</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est orci quisque fames. Elementum in viverra vel mollis vitae eget bibendum duis elit</p>
                </div>
            </div>
            <div className="container__four--two">
                <div className="one__text">
                    <h4 className="four__title">Lorem ipsum</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est orci quisque fames. Elementum in viverra vel mollis vitae eget bibendum duis elit</p>
                </div>
                <div className="one__text">
                    <h4 className="four__title">Lorem ipsum</h4>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu est orci quisque fames. Elementum in viverra vel mollis vitae eget bibendum duis elit</p>
                </div>
            </div>
            <h2 className="second__title">SOURCES</h2>
            <p className="text">Our World in Data - Plastic Pollution </p>
        </div>

    )
}
export default About;