import Link from "next/link";
export default function Footer() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="footerTop position-relative pt-5 pb-sm-4 pb-3">
        <Link href="/">
          <a>
            <img
              src="/assets/imgs/logo.svg"
              data-aos="fade-down-right"
              data-aos-duration="1500"
              className="footerLogo"
              alt=""
            />
          </a>
        </Link>
        <div className="container">
          <div className="d-flex justify-content-sm-end justify-content-center">
            <div className="d-sm-flex collect align-items-center gap-2">
              <h1
                className="mb-sm-0 mb-3"
                data-aos="fade-down-left"
                data-aos-duration="1500"
              >
                Ready to collect ?
              </h1>
              <a
                href=""
                className="mx-auto"
                data-aos="fade-down-left"
                data-aos-duration="1500"
              >
                View NFT
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-3">
        <hr />
      </div>
      <div className="container footerBottom">
        <div className="row gy-3">
          <div className="col-md-6">
            <h1 data-aos="zoom-in-right" data-aos-duration="1500">
              Create, sell, and collect NFT Digital Arts
            </h1>
            <div className="d-flex justify-content-sm-start justify-content-center">
              <div className="d-flex gap-5 mt-3">
                <a href="">
                  <i
                    className="fa fa-facebook"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-twitter"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  ></i>
                </a>
                <a href="">
                  <i
                    className="fa fa-instagram"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-sm-0 pt-4">
            <div className="row gy-sm-0 gy-3">
              <div
                className="col-sm-4 text-sm-start text-center"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <div className="title">Marketplace</div>
                <ul>
                  <li>
                    <a href="">Create</a>
                  </li>
                  <li>
                    <a href="">Minting</a>
                  </li>
                  <li>
                    <a href="">Sell</a>
                  </li>
                  <li>
                    <a href="">Collect</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-4 text-sm-start text-center"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <div className="title">Company</div>
                <ul>
                  <li>
                    <a href="">Bug Bounty</a>
                  </li>
                  <li>
                    <a href="">Community Guidelines</a>
                  </li>
                  <li>
                    <a href="">Team</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-4 text-sm-start text-center"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <div className="title">Help</div>
                <ul>
                  <li>
                    <a href="">FAQs</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
