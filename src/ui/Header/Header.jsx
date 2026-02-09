import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../app/store/authSelectors.js";

import style from "./header.module.css";
import { Logo } from "./Logo.jsx";
import { NavBar } from "./NavBar.jsx";
import { Button } from "./Button.jsx";
import { ReactComponent as BuregerMenu } from "../assets/icons/burger.svg";
import { ReactComponent as LogOut } from "../assets/icons/LogOut.svg";
import { UserMenu } from "./UserMenu.jsx";
import { Container } from "../components/Container/Container.jsx";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const openBurger = () => {
    setOpen(!isOpen);
  };

  const openUserMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className={style.header}>
      <Container>
        <div className={style.backgroundContainer}>
          <div className={style.logoContainer}>
            <Logo />
          </div>
          <div className={style.NavBarAndbuttons}>
            <NavBar isLogin={"kjh"} />
            <div
              className={style.desctopBtns}
              style={{ display: isLoggedIn ? "none" : "flex" }}
            >
              <Button />
            </div>
            <div
              className={style.userInfo}
              style={{ display: isLoggedIn ? "flex" : "none" }}
            >
              <button
                className={style.shareLoctionBtn}
                style={{ display: isLoggedIn ? "flex" : "none" }}
              >
                Поділитись локацією
              </button>
              <div className={style.UserAvatarAndName} onClick={openUserMenu}>
                <img
                  className={style.userAvatar}
                  src={user?.avatar}
                  alt="UserAvatar"
                />
                <p>{user?.name}</p>
              </div>
              {isOpenMenu && <UserMenu />}
              <button className={style.logOutBtn}>
                {" "}
                <LogOut />
              </button>
            </div>
          </div>
          <div className={style.mobileNavBarAndButtons}>
            <div
              className={style.mobileBtns}
              style={{ display: isLoggedIn ? "none" : "flex" }}
            >
              <Button />
            </div>
            <button
              className={style.shareLoctionBtn}
              style={{ display: isLoggedIn ? "flex" : "none" }}
            >
              Поділитись локацією
            </button>
            <div className={style.mobileNavContainer}>
              <button className={style.burgerMenu} onClick={openBurger}>
                <BuregerMenu className={style.burgerMenuIcon} />
              </button>

              <ul
                className={`${
                  isOpen ? style.mobileList : style.burgerMenuDisable
                }`}
              >
                <li className={style.mobileItem}>
                  <Link to={"/"} className={style.mobileNavLink}>
                    Головна
                  </Link>
                </li>
                <li className={style.mobileItem}>
                  <Link to={"/locations"} className={style.mobileNavLink}>
                    Місця відпочинку
                  </Link>
                </li>
                <li className={style.mobileItem}>
                  <Link
                    to={`/profile/${user?.id}`}
                    className={style.mobileNavLink}
                    style={{ display: isLoggedIn ? "flex" : "none" }}
                  >
                    Мій Профіль
                  </Link>
                </li>
                <div
                  className={style.UserAvatarAndName}
                  onClick={openUserMenu}
                  style={{ display: isLoggedIn ? "flex" : "none" }}
                >
                  <img
                    className={style.userAvatar}
                    src={user?.avatar}
                    alt="UserAvatar"
                  />
                  <p>{user?.name}</p>
                </div>
                {isOpenMenu && <UserMenu />}
                <button
                  className={style.shareLoctionMobileBtn}
                  style={{ display: isLoggedIn ? "flex" : "none" }}
                >
                  Поділитись локацією
                </button>
                <button
                  className={style.logOutBtn}
                  style={{ display: isLoggedIn ? "flex" : "none" }}
                >
                  {" "}
                  <LogOut />
                </button>
                <div
                  className={style.burgerMobileBtns}
                  style={{ display: isLoggedIn ? "none" : "flex" }}
                >
                  <Button />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
