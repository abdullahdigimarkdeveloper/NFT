import Image from "next/image";
export default function Header() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="headerTop">
              <div className="d-flex justify-content-end">
                <div className="d-flex">
                  <Image
                    src="/assets/imgs/support.svg"
                    alt="Landscape picture"
                    width={14}
                    height={18}
                  />
                  <p>Support</p>
                </div>
                <div className="seperator"></div>
                <div className="d-flex">
                  <Image
                    src="/assets/imgs/mail.svg"
                    alt="Landscape picture"
                    width={14}
                    height={18}
                  />
                  <p>info@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainHeader pt-4 pb-3 position-relative">
        <nav className="navbar navbar-expand-lg">
          <div className="container justify-content-end">
            <a className="navbar-brand" href="#">
              <img
                className="logo"
                src="/assets/imgs/logo.svg"
                alt="Landscape picture"
              />
            </a>
            <button
              className="navbar-toggler px-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Game
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Marketplace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Road Map
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Audit
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="whitePaper">
                    WHITEPAPER
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
