import React  from 'react';
import {useSelector} from "react-redux";
import useDataFetch from '../../services/ApiService';
import Navigation from '../navigation/Navigation'
import SliderItem from "../sliderItem/SliderItem";
import './Slider.scss'
const Slider = () => {

    const navigation = useSelector(state => state.navigation);
    const {currentSlide} = navigation;
    const cta = 'https://it.wikipedia.org/wiki/Nikola_Tesla';
    const [data] = useDataFetch('./sliderData.json');

    return (
        <div className="slider">
            {data && data.length > 0 ? (
                <React.Fragment>
                    <ul className="slider-list vh100">
                        {data.map((slide, i) => {
                            return (
                                <SliderItem
                                    currentSlide={currentSlide}
                                    slide={slide}
                                    cta={cta}
                                    key={i}
                                    i={i}
                                />
                            );
                        })}
                    </ul>
                    <Navigation
                        currentSlide={currentSlide}
                        data={data}
                    />
                </React.Fragment>
            ) : (
                <h1>Data not available</h1>
            )}
        </div>
    );
}
export default  Slider;