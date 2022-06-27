import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [opensidebar, setopensidebar] = useState(false);
  console.log(opensidebar);
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
            <Link href="/">
              <a className="navbar-brand">
                <img
                  className="logo"
                  src="/assets/imgs/logo.svg"
                  alt="Landscape picture"
                  data-aos="fade-down-right"
                  data-aos-duration="1500"
                />
              </a>
            </Link>

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
                <li
                  className="nav-item dropdown"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
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
                <li
                  className="nav-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <a className="nav-link" href="#">
                    Marketplace
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <a className="nav-link" href="#">
                    Road Map
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <a className="nav-link" href="#">
                    Tokenomics
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <a className="nav-link" href="#">
                    Audit
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <a className="nav-link" href="#">
                    Team
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                >
                  <a href="" className="whitePaper">
                    WHITEPAPER
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <p>{opensidebar}</p>
      <div className={`sidebarMain ${opensidebar ? "opened" : ""}`}>
        <button
          className={`filterBtn mt-2 ${opensidebar ? "opened" : ""}`}
          onClick={() => setopensidebar(!opensidebar)}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Filters <span>>></span>
        </button>
        <img src="/assets/imgs/sidebar-header.png" className="strip" alt="" />
        <div className="sidebarInner">
          <div className="input-group border-0 mb-3">
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search Collections"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text border-0" id="basic-addon2">
              <img src="/assets/imgs/search.svg" alt="" />
            </span>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item border-0">
              <h2
                className="accordion-header border-0"
                id="panelsStayOpen-headingOne"
              >
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Status
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <label className="checkboxContainer">
                    Buy Now
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    On Actions
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Has Offers
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="accordion-item border-0">
              <h2
                className="accordion-header border-0"
                id="panelsStayOpen-headingTwo"
              >
                <button
                  className="accordion-button collapsed border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Categories
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <label className="checkboxContainer">
                    Art
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Music
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Domain Names
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Virtual Worlds
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Trading Cards
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    collectibles
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Sports
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Utilities
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="accordion-item border-0">
              <h2
                className="accordion-header "
                id="panelsStayOpen-headingThree"
              >
                <button
                  className="accordion-button collapsed bg-transparent border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Chains
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <label className="checkboxContainer">
                    Ethereum
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Polygon
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Klaytn
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="accordion-item border-0">
              <h2
                className="accordion-header border-0"
                id="panelsStayOpen-headingOne"
              >
                <button
                  className="accordion-button border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  Collections
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  <label className="checkboxContainer">
                    Abstraction
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Patternlicious
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Skecthify
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Cartoonism
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Virtuland
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="checkboxContainer">
                    Papercut
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
