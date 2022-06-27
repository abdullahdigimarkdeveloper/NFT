import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Collection from "../components/data/collection-data.json";
export default function TrendingNFT(props) {
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
        breakpoint: 2500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
      <Slider className="trendingNFT" arrows={false} {...settings}>
        {Collection.map((data) => {
          return (
            <div key={data.id} className="p-2">
              <div
                className="customCard"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <div className="px-3">
                  <div className="imageBorder position-relative">
                    <img className="w-100" src={data.img} alt="" />
                    <div className="floatingImage">
                      <img src={data.img} alt="" />
                    </div>
                  </div>
                  <h4>@{data.author}</h4>
                  <h1>{data.name}</h1>
                </div>
                <div className="cardBottom px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex currency align-items-center">
                      <img src="/assets/imgs/bitcoin.svg" alt="" />
                      <img src="/assets/imgs/ethereum.svg" alt="" />
                    </div>
                    <div className="d-flex price align-items-center">
                      <p>Price:</p>
                      <h2>${data.price}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
