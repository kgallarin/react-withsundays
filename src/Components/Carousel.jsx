import React, { Fragment } from "react";
import Slider from "react-slick";

const Carousel = props => {
  let settings = {
    speed: 500,
    centerMode: true,
    arrows: false,
    centerPadding: "15px",
    autoPlay: true,
    dots: true
  };
  const { data } = props;
  return (
    <Fragment>
      <Slider {...settings}>
        <div>
          <img src={data} alt="/" />
        </div>
        <div>
          <img src={data} alt="/" />
        </div>
        <div>
          <img src={data} alt="/" />
        </div>
        <div>
          <img src={data} alt="/" />
        </div>
        <div>
          <img src={data} alt="/" />
        </div>
      </Slider>
    </Fragment>
  );
};
<video
  width="100%"
  controls="false"
  preload="metadata"
  poster="http://placehold.it/910x606"
  muted
>
  <source
    src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
    type="video/mp4"
  />
</video>;
export default Carousel;
