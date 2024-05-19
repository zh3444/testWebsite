import React from "react";
import "../Component-Styles/SliderArrows.css";

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={`${className} arrows next-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick} />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={`${className} arrows prev-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick} />
    );

}

export { NextArrow, PrevArrow };