import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { FiFileText, FiUser } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import { ScrollSpy } from '../../components';

export const Header = () => {
  const [click, setClick] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) => {
    const { target } = e;
    let level = 0;
    let element = target.parentElement;
    element?.classList?.add('active');

    const navLinks = document.querySelectorAll('li');
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
    while (element && level < 5) {
      if (element.tagName === 'LI') {
        element.classList.add('active');
        break;
      }
      element = element.parentElement;
      level++;
    }

    const nameLink: string = element.firstChild.dataset['for'];
    handleNavItemClick(nameLink.toLowerCase());
  };

  const handleScrollTo = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavItemClick = (id: string) => {
    handleScrollTo(id);
    setClick(!click);
  };

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? 'active' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? 'header-left menu-open' : 'header-left '}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">P</Link>
            </div>
          </div>
          {/* End htl-top */}

          <div ref={scrollRef}>
            <ScrollSpy
              className="nav nav-menu"
              items={['home', 'about', 'education']}
              currentClassName="active"
              offset={30}
            >
              <li>
                <Link
                  to="/"
                  className="nav-link"
                  // onClick={() => handleNavItemClick('home')}
                  onClick={handleClick}
                  data-tip
                  data-for="HOME"
                >
                  <FaHome />
                  <ReactTooltip id="HOME" place="right" type="dark" effect="float">
                    <span>Home</span>
                  </ReactTooltip>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link" onClick={handleClick} data-tip data-for="ABOUT">
                  <FiUser />
                  <ReactTooltip id="ABOUT" place="right" type="dark" effect="float">
                    <span>About</span>
                  </ReactTooltip>
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link" onClick={handleClick} data-tip data-for="EDUCATION">
                  <FiFileText />
                  <ReactTooltip id="EDUCATION" place="right" type="dark" effect="float">
                    <span>Educación</span>
                  </ReactTooltip>
                </Link>
              </li>
              {/* <li>
                <a
                    className="nav-link"
                    href="#work"
                    data-tip
                    data-for="WORK"
                    onClick={handleClick}
                >
                    <FiBriefcase />
                    <ReactTooltip
                    id="WORK"
                    place="right"
                    type="dark"
                    effect="float"
                    >
                    <span>Work</span>
                    </ReactTooltip>
                </a>
                </li>
                <li>
                <a
                    className="nav-link"
                    href="#blog"
                    data-tip
                    data-for="BLOG"
                    onClick={handleClick}
                >
                    <FaBlog />
                    <ReactTooltip
                    id="BLOG"
                    place="right"
                    type="dark"
                    effect="float"
                    >
                    <span>Blog</span>
                    </ReactTooltip>
                </a>
                </li>
                <li>
                <a
                    className="nav-link"
                    href="#contactus"
                    data-tip
                    data-for="CONTACT"
                    onClick={handleClick}
                >
                    <FiPhoneOutgoing />
                    <ReactTooltip
                    id="CONTACT"
                    place="right"
                    type="dark"
                    effect="float"
                    >
                    <span>Contact</span>
                    </ReactTooltip>
                </a>
                </li> */}
            </ScrollSpy>
          </div>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};
