import React from "react";
import "../Styles/Main.css";
import mainImg from "../Assets/MainImg.png"; // yahan apni image ka normal naam rakhna

const Main = () => {
    return (
        <div className="container">
            <div className="main-container">
                <div className="left">
                    <h1 className="heading">Where Do You <br /> Want To Go</h1>
                    <p className="description">
                        Let’s get you there safely and quickly, with a smooth experience that makes every journey feel effortless.                     </p>
                </div>

                <div className="right">
                    <img src={mainImg} alt="Main Image" className="main-image" />
                </div>
            </div>
        </div>
    );
};

export default Main;
