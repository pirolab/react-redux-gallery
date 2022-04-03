import React from "react";
import './SliderItem.scss'
import Button from "../button/Button";

 const SliderItem = (props) => {
    const {i, currentSlide, slide, cta} = props;
    const {
        imageRocket,
        imageRock,
        subtitle,
        bgImage,
        title,
        logo,
        hash,
    } = slide
    return (

        <React.Fragment>
            {slide && (
                <li className={'slider-item ' + (i === currentSlide ? 'vh100 isVisible' : 'hidden')}>

                    <div className={'left-image'}
                         style={{background: `url(${imageRock}) bottom/cover no-repeat`}}/>

                    <div className={'slider-item--bg'}
                         style={{background: `url(${bgImage}) bottom/cover no-repeat`}}/>

                    <div className={'rocket_block'}>

                        <div className="rocket_block-wrapper">

                            <h2 className="rocket_block-wrapper-subtitle">{subtitle}</h2>

                            <div className="rocket_block-wrapper-hash">

                                <span>{hash}</span>

                            </div>

                        </div>

                    </div>

                    <div className="slider-grid">

                        <div className={'logo'}
                             style={{background: `url(${logo}) center/contain no-repeat`}}/>

                        <h1 className={'title'}>
                            {title}
                        </h1>

                        <Button i={i} currentSlide={currentSlide} cta={cta}/>

                    </div>

                    <div className={'right-image'}
                         style={{background: `url(${imageRocket}) center/cover no-repeat`}}/>

                </li>
            )}
        </React.Fragment>
    );
}
export default SliderItem;