import React, { Fragment } from "react";
import Slider from "react-slick";

const VideoCarousel = props => {
  let settings = {
    speed: 500,
    centerMode: true,
    arrows: false,
    centerPadding: "15px",
    autoPlay: true,
    dots: true
  };
  return (
    <Fragment>
      <Slider {...settings}>
        <div>
          <video width="100%" preload="metadata" muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video width="100%" preload="metadata" muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video width="100%" preload="metadata" muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video width="100%" preload="metadata" muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          <video width="100%" preload="metadata" muted>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
              type="video/mp4"
            />
          </video>
        </div>
      </Slider>
    </Fragment>
  );
};

export default VideoCarousel;
