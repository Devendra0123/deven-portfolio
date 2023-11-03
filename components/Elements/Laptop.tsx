"use client"
import React, { useEffect, useState } from 'react';
import ShowcaseSlider from '../Slider/ShowcaseSlider';

function Laptop() {
  const [skewValue, setSkewValue] = useState(-50);
  const [rotateValue, setRotateValue] = useState(70);

  useEffect(() => {
    const laptopScreen: any = document.querySelector(".laptop__screen");

    const handleScroll = () => {
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) * 6 /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);

      const skewAngle = -50 + scrollPercentage * 50; // Range from -50 to 0 degrees
      const rotateAngle = 70 - scrollPercentage * 70;
      // Set the skew transformation in degrees
      if (skewAngle < 0) {
        setSkewValue(skewAngle);
      } else {
        setSkewValue(0)
      }

      if (rotateAngle > 0) {
        setRotateValue(rotateAngle)
      } else {
        setRotateValue(0)
      }

    };

    // Add a scroll event listener to track the scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="laptop">
      <div className="laptop__screen" style={{ transform: `skew(${skewValue}deg)rotateX(${rotateValue}deg)` }}>
        <div className='showcase__container overflow-hidden'>
          <ShowcaseSlider />
        </div>
      </div>
      <div className="laptop__bottom"></div>
      <div className="laptop__under"></div>
      <div className="laptop__shadow"></div>
    </div>
  );
}

export default Laptop;
