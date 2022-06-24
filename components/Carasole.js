import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Carasole(props) {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: props.speed,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider className="customSlider" arrows={false} {...settings}>
        <div className="p-3">
          <img src="/assets/imgs/slider-1.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-2.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-3.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-4.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-1.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-2.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-3.png" alt="" />
        </div>
        <div className="p-3">
          <img src="/assets/imgs/slider-4.png" alt="" />
        </div>
      </Slider>
    </div>
  );
}
