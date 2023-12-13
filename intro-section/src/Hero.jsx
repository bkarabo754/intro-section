import React, { useState } from "react";
import mobile from "./assets/images/image-hero-mobile.png";
import desktop from "./assets/images/image-hero-desktop.png";
import audiophile from "./assets/images/client-audiophile.svg";
import databiz from "./assets/images/client-databiz.svg";
import maker from "./assets/images/client-maker.svg";
import meet from "./assets/images/client-meet.svg";
import logo from "./assets/images/logo.svg";
import chevronDown from "./assets/images/icon-arrow-down.svg";
import chevronUp from "./assets/images/icon-arrow-up.svg";
import menuOpen from "./assets/images/icon-menu.svg";
import closeMenu from "./assets/images/icon-close-menu.svg";
import TodoList from "./assets/images/icon-todo.svg";
import Calendar from "./assets/images/icon-calendar.svg";
import Reminders from "./assets/images/icon-reminders.svg";
import Planning from "./assets/images/icon-planning.svg";

const Hero = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleOpenMenu = () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".menu-button");

    navbar.classList.toggle("open");

    if (navbar.classList.contains("open")) {
      menuButton.src = closeMenu;
    } else {
      menuButton.src = menuOpen;
    }
  };

  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start">
          <img src={logo} alt="Logo Icon" className="lg:mr-5" />
          <nav className="navbar">
            <div>
              <button
                onClick={() => setOpenFeatures(!openFeatures)}
                className="flex items-center justify-start"
              >
                Features{" "}
                {openFeatures ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-2" />
                )}
              </button>

              {openFeatures && (
                <ul className="mt-5 ml-6 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-5">
                    <img src={TodoList} alt="Todo List" className="mr-2" />
                    <span className="ml-1">Todo List</span>
                  </li>
                  <li className="flex items-center justify-start text-sm mb-5">
                    <img src={Calendar} alt="Calendar" className="mr-2" />
                    <span className="ml-1">Calendar</span>
                  </li>
                  <li className="flex items-center justify-start text-sm mb-5">
                    <img src={Reminders} alt="Reminders" className="mr-2" />
                    <span className="ml-1">Reminders</span>
                  </li>
                  <li className="flex items-center justify-start text-sm mb-5">
                    <img src={Planning} alt="Planning" className="mr-2" />
                    <span className="ml-1">Planning</span>
                  </li>
                </ul>
              )}
            </div>

            <div>
              <button
                onClick={() => setOpenCompany(!openCompany)}
                className="flex items-center justify-start"
              >
                Company{" "}
                {openCompany ? (
                  <img src={chevronUp} alt="" className="ml-2" />
                ) : (
                  <img src={chevronDown} alt="" className="ml-1" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow space-y-3">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <span className="ml-3">History</span>
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <span className="ml-3">Our Team</span>
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <span className="ml-3">Blog</span>
                  </li>
                </ul>
              )}
            </div>
            <div className="lg:flex">
              <div className="lg:mb-0">
                <button>Careers</button>
              </div>
              <div className="lg:mb-0">
                <button>About</button>
              </div>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={handleOpenMenu}>
            <img src={menuOpen} alt="hamburger menu" className="menu-button" />
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-ablack rounded-2xl hover:bg-black hover:text-awhite opacity-75 py-2 px-4">
            Register
          </button>
        </div>
      </header>

      <section className="flex flex-col-reverse py-10 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto">
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">
            Make remote work
          </h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-ablack rounded-xl font-semibold shadow text-awhite hover:bg-awhite border-2 border-ablack hover:text-black hover:opacity-75 transition-all duration-150 py-3 px-6 cursor-pointer">
            Learn more
          </button>
          <ul className="grid grid-cols-4 gap-1 mt-10 place-items-center md:place-items-start">
            <li>
              <img src={databiz} alt="Data Icon" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={audiophile} alt="Audio Icon" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={meet} alt="Meet Icon" className="w-16 md:w-24" />
            </li>
            <li>
              <img src={maker} alt="Maker Icon" className="w-16 md:w-24" />
            </li>
          </ul>
        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" srcSet={desktop} />
            <img src={mobile} alt="mobile version" className="w-full" />
          </picture>
        </article>
      </section>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://bongani.netlifly.app">Bongani Masango</a>.
      </div>
    </>
  );
};

export default Hero;
