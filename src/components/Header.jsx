import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import mobilelogo from "../assets/mobile-logo.png";
import burger from "../assets/burger.png";
import close from "../assets/x.png";
import phoneIcon from "../assets/phone-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import viberIcon from "../assets/viber-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInsuranceDropdownOpen, setIsInsuranceDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleInsuranceDropdown = () => {
    setIsInsuranceDropdownOpen(!isInsuranceDropdownOpen);
  };

  return (
    <>
      <header className="header">
        {!isMobile && (
          <div className="top-bar">
            <div className="container">
              <img src={logo} alt="Logo" className="logo" />
              <div className="contact-info">
                <div className="contact-item">
                  <span>Україна, 01001, м. Київ, Хрещатик, 1, оф. 906</span>
                </div>
                <div className="contact-item">
                  <img src={phoneIcon} alt="Phone" />
                  <span>(044) 299-75-79</span>
                </div>
                <div className="social-icons">
                  <a href="https://facebook.com">
                    <img src={facebookIcon} alt="Facebook" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={instagramIcon} alt="Instagram" />
                  </a>
                  <a href="https://twitter.com">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="https://viber.com">
                    <img src={viberIcon} alt="Viber" />
                  </a>
                </div>
                <button className="callback-button">Замовити дзвінок</button>
              </div>
            </div>
          </div>
        )}
        <div className="container-main">
          {!isMobile && (
            <nav className="main-nav">
              <ul>
                <li>
                  <a href="#home">Головна</a>
                </li>
                <li className="dropdown">
                  <a href="#insurance" onClick={toggleDropdown}>
                    Застрахувати
                  </a>
                </li>
                <li>
                  <a href="#case">Страховий випадок</a>
                </li>
                <li>
                  <a href="#about">Про компанію</a>
                </li>
                <li>
                  <a href="#info">Корисна інформація</a>
                </li>
                <li>
                  <a href="#contacts">Контакти</a>
                </li>
                <li>
                  <a href="#ua">ua</a>
                </li>
                <li>
                  <a href="#ru">ru</a>
                </li>
              </ul>
            </nav>
          )}
          {isMobile && (
            <div className="menu-container">
              <img src={mobilelogo} alt="Logo" className="logo" />
              <button className="callback-button">Замовити дзвінок</button>
              <img
                src={isMenuOpen ? close : burger}
                alt="Menu Icon"
                className="menu-icon"
                onClick={toggleMenu}
              />
            </div>
          )}
        </div>
        {isMobile && isMenuOpen && (
          <nav className="main-nav mobile-nav">
            <ul>
              <li>
                <a href="#home">Головна</a>
              </li>
              <li>
                <a href="#insurance" onClick={toggleInsuranceDropdown}>
                  Застрахувати
                </a>
                {isInsuranceDropdownOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="#auto">Автоцивілка</a>
                      </li>
                      <li>
                        <a href="#kasko">Каско</a>
                      </li>
                      <li>
                        <a href="#green-card">Зелена карта</a>
                      </li>
                      <li>
                        <a href="#property">Страхування майна</a>
                      </li>
                      <li>
                        <a href="#travel">Туристичне страхування</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <a href="#case">Страховий випадок</a>
              </li>
              <li>
                <a href="#about">Про компанію</a>
              </li>
              <li>
                <a href="#info">Корисна інформація</a>
              </li>
              <li>
                <a href="#contacts">Контакти</a>
              </li>
              <div className="buttons-ua">
                <button>
                  <a href="#ua">UA</a>
                </button>
                <button>
                  <a href="#ru">ru</a>
                </button>
              </div>
            </ul>
          </nav>
        )}
      </header>
      {isDropdownOpen && (
        <div className="dropdown-overlay" onClick={closeDropdown}>
          <div className="dropdown-menu">
            <ul>
              <li>
                <a href="#auto">Автоцивілка</a>
              </li>
              <li>
                <a href="#kasko">Каско</a>
              </li>
              <li>
                <a href="#green-card">Зелена карта</a>
              </li>
              <li>
                <a href="#health">Страхування життя</a>
              </li>
              <li>
                <a href="#travel">Туристичне страхування</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
