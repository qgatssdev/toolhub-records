import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="header__root">
      <div className="header__root__content">
        <div className="header__root__content__div1">
          <img
            src={require("../../assets/Wikimedia-Phabricator-logo.png)")}
            alt="logo"
          />
          <ul>
            <li>
              <NavLink to={"/"} className="div1__navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Dashboard"} className="div1__navlink">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Leaderboard"} className="div1__navlink">
                Leaderboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header__root__content__div2">
          <div className="div2__icons">
            <img
              src={require("../../assets/search.svg").default}
              alt="search"
            />
            <img
              src={require("../../assets/settings.svg").default}
              alt="settings"
            />
            <img
              src={require("../../assets/notifications.svg").default}
              alt="notifications"
            />
          </div>
          <div className="div2__user">
            <img src={require("../../assets/guest.png")} alt="" />
            <p>Guest</p>
          </div>
          <div className="div2__hamburger">
            <Hamburger
              //   color="#fff"
              color={toggled ? "#101828" : "#fff"}
              duration={0.8}
              onToggle={() => {
                setToggled(!toggled);
              }}
            />
          </div>
        </div>
      </div>
      {toggled && (
        <section className="hamburger__root">
          <ul>
            <li>
              <NavLink to={"/"} className="hamburger__root__links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Dashboard"} className="hamburger__root__links">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Leaderboard"} className="hamburger__root__links">
                Leaderboard
              </NavLink>
            </li>
            <li>
              <div className="hamburger__icons">
                <div className="hamburger__icons__triple">
                  <img
                    src={require("../../assets/search.svg").default}
                    alt="search"
                  />
                  <img
                    src={require("../../assets/settings.svg").default}
                    alt="settings"
                  />
                  <img
                    src={require("../../assets/notifications.svg").default}
                    alt="notifications"
                  />
                </div>
              </div>
            </li>
          </ul>
        </section>
      )}
    </div>
  );
};

export default Header;
