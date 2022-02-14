import React, { useState } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import skate from '../../assets/skatem.jpg';

const Carrosel: React.FC = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })


return(
<>
    <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={skate} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={skate} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={skate} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={skate} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={skate} alt="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={skate} alt="" />
          </div>
      </div>
</>)};

export default Carrosel;
