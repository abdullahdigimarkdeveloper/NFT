export default function Footer() {
  return (
    <div>
      <div className="footerTop position-relative pt-5 pb-sm-4 pb-3">
        <img src="/assets/imgs/logo.svg" className="footerLogo" alt="" />
        <div className="container">
          <div className="d-flex justify-content-sm-end justify-content-center">
            <div className="d-sm-flex collect align-items-center gap-2">
              <h1 className="mb-sm-0 mb-3">Ready to collect ?</h1>
              <a href="" className="mx-auto">
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
            <h1>Create, sell, and collect NFT Digital Arts</h1>
            <div className="d-flex justify-content-sm-start justify-content-center">
              <div className="d-flex gap-5 mt-3">
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
          <div className="col-md-6 pt-sm-0 pt-4">
            <div className="row gy-sm-0 gy-3">
              <div className="col-sm-4 text-sm-start text-center">
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
              <div className="col-sm-4 text-sm-start text-center">
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
              <div className="col-sm-4 text-sm-start text-center">
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
