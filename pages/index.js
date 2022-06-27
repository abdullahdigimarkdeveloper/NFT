import Head from "next/head";
import Image from "next/image";
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
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container-fluid px-0">
        <div className="headerContainer">
          <Header />
        </div>
        <div className="mt-150px">
          <Carasole speed="8000" />
          <Carasole reverse="true" speed="7000" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{ overflow: "hidden" }}
              className="d-sm-flex justify-content-between py-5 align-items-center"
            >
              <h1
                className="mainTitle mb-0"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
              >
                Explore Collections <img src="/assets/imgs/fire.svg" alt="" />
              </h1>
              <a
                href=""
                className="seeAll text-end"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
              >
                See All
              </a>
            </div>
            <Collections />
            <div
              style={{ overflow: "hidden" }}
              className="d-sm-flex justify-content-between pt-5 pb-3 align-items-center"
            >
              <h1
                className="mainTitle mb-0"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
              >
                Trending NFT{" "}
                <img className="hand" src="/assets/imgs/hand.svg" alt="" />
              </h1>
              <a
                href=""
                className="seeAll text-end"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
              >
                See All
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0">
        <TrendingNFT speed="8000" />
      </div>
      <div className="container">
        <div className="row" style={{ overflow: "hidden" }}>
          <div className="col-md-12">
            <div className="d-sm-flex justify-content-between py-5 align-items-center">
              <h1
                className="mainTitle mb-0"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
              >
                Top Sellers{" "}
                <img
                  className="hand"
                  src="/assets/imgs/star.svg"
                  style={{ transform: "rotate(0deg)" }}
                  alt=""
                />
              </h1>
              <a
                href=""
                className="seeAll text-end"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
              >
                See All
              </a>
            </div>
            <TopSellers />
            <div className="mb-4 mt-5">
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-white">
        <Footer />
      </div>
    </>
  );
}
