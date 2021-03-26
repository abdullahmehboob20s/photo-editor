import React, { useState } from "react";

let Slider = (props) => {
  let [sliderValue, setsliderValue] = useState(props.ivalue);
  let { runner } = props;

  let changeSliderValue = (e) => {
    setsliderValue(e.target.value);
    runner(props.title, sliderValue);
  };

  return (
    <div className="sliderContainer">
      <h3>{props.title} : </h3>
      <div className="slider_div">
        <input
          type="range"
          min={props.min}
          max={props.range}
          value={props.ivalue}
          onInput={changeSliderValue}
          className="slider"
        />
        <p>
          {sliderValue}/{props.range}
        </p>
      </div>
    </div>
  );
};

export default Slider;
