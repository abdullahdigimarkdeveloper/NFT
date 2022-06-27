import Header from "../components/Header";
import Carasole from "../components/Carasole";
import Collections from "../components/Collections";
import TrendingNFT from "../components/TrendingNFT";
import TopSellers from "../components/TopSellers";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function detail() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="detailPageMain">
      <div className="container-fluid px-0">
        <div className="headerContainer">
          <Header />
        </div>
      </div>
      <div className="container mt-150px">
        <div className="row gx-5">
          <div className="col-md-6 mb-md-0 mb-4">
            <img
              src="/assets/imgs/nft-detail.png"
              className="w-100 h-100 nftDetailimg"
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1500"
            />
          </div>
          <div
            className="col-md-6"
            data-aos="fade-down-right"
            data-aos-duration="1500"
          >
            <h1 className="mainTitle mb-0">Yellow Painting</h1>
            <div className="detailCard mt-4">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                habitant aliquam, malesuada pharetra quis lorem convallis elit
                et. Sed elit, a donec sit purus, mauris at malesuada. Ipsum,
                faucibus aliquet tempus amet at sit. Nunc.
              </p>
              <hr />
              <h4>Properties</h4>
              <div className="d-flex justify-content-between mt-3 mb-2">
                <h5>Rarity</h5>
                <h5 className="maincolor">Very Common</h5>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h5>Type</h5>
                <h5 className="maincolor">Yellow Painting</h5>
              </div>
              <div className="d-flex justify-content-sm-end justify-content-center">
                <div className="d-flex gap-4">
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="detailCard mt-4">
              <h4>Details</h4>
              <div className="d-flex justify-content-between mt-3 mb-2">
                <h5>Contract Address</h5>
                <h5 className="maincolor">0x466c...13ac</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <h5>Token ID</h5>
                <h5 className="maincolor">8826</h5>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <h5>Token Standard</h5>
                <h5 className="maincolor">ERC-721</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <h5>Blockchain</h5>
                <h5 className="maincolor">Ethereum</h5>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <h5>Creator Fees</h5>
                <h5 className="maincolor">5%</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="d-sm-flex justify-content-between py-5 align-items-center">
              <h1 className="mainTitle mb-0">More From This Collections </h1>
            </div>
            <Collections />
            <div className="collect moreCollection mt-5 mb-4">
              <a href="" className="mx-auto">
                View More Collection
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-white">
        <Footer />
      </div>
    </div>
  );
}
