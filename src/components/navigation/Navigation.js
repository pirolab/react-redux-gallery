import React, {useState} from "react";
import './Navigation.scss'
import Loader from "../loader/Loader";
import {useDispatch} from "react-redux";
import {prev, next, bullet} from "../../actions";

const Navigation = (props) => {
    const {data, currentSlide} = props;
    const dispatch = useDispatch()
    const {linkprev, linknext} = data[currentSlide];
    const [isLoading, setIsLoading] = useState(true);

    function handleChange(newValue) {
        setIsLoading(newValue);
    }

    return (
        <React.Fragment>
            {data && (
                <div className="slider-nav">

                    <span className="image-count">{currentSlide + 1} of {data.length}</span>

                    <Loader isLoading={isLoading} onChange={handleChange}/>

                    <span className="slider-nav-prev"
                          onClick={() => {
                              if (!isLoading) {
                                  dispatch(prev(data.length));
                                  setIsLoading(true)
                              }
                          }}>{linkprev}</span>

                    <span className="slider-nav-next"
                          onClick={() => {
                              if (!isLoading) {
                                  dispatch(next(data.length));
                                  setIsLoading(true)
                              }
                          }}>{linknext}</span>

                    <ul className="bullet-nav">
                        {data.map((element, index) => {
                            return (
                                <li className={'bullet-nav-item ' + (index === currentSlide ? 'isActive' : '')}
                                    key={index}
                                    onClick={() => {
                                        if (!isLoading) {
                                            dispatch(bullet(index, data.length));
                                            setIsLoading(true)
                                        }
                                    }}/>
                            );
                        })}
                    </ul>
                </div>

            )}
        </React.Fragment>
    );
}
export default Navigation;