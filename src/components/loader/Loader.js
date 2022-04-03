import React from "react";
import './Loader.scss'

const Loader = (props) => {
    const {isLoading, onChange} = props;

    function handleChange(event) {
        onChange(event);
    }

    return (
        <span className={'loader ' + (isLoading ? 'isLoading' : '')}
              onAnimationEnd={() => {
                  handleChange(false)
              }}
        />
    );
}
export default Loader;