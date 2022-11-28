import React from "react";
import './Button.scss'

const  Button = (props) => {
    const {currentSlide , i ,cta} = props;

    return (
        <a href={cta} target="_blank" rel="noreferrer"  className={i === currentSlide ? "button_cta isVisible" : "button_cta "}>
            <span>Start your trip ⯈</span>
        </a>
    );
}
 export default Button;