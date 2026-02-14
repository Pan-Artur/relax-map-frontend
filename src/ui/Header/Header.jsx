import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../app/store/authSelectors.js";

import style from "./header.module.css";
import { Logo } from "../Logo/Logo.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";
import { Button } from "../Button/Button.jsx";
import { ReactComponent as BuregerMenu } from "../../assets/icons/burger.svg";
import { ReactComponent as LogOut } from "../../assets/icons/LogOut.svg";
import { UserMenu } from "../UserMenu/UserMenu.jsx";
import { Container } from "../../components/Container/Container.jsx";
import { MenuHeader } from "../MenuHeader/MenuHeader.jsx";
import { useEffect } from "react";
export const Header = () => {
  const [isOpenBurger, setOpenBurger] = useState(false);
  const [isOpenUserMenu, setOpenUserMenu] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const toggleBurger = () => setOpenBurger(!isOpenBurger);
  const toggleUserMenu = () => setOpenUserMenu(!isOpenUserMenu);

  const handleShareLocation = () => {
    if (isLoggedIn) {
      navigate("/locations/add");
    } else {
      navigate("/auth/login");
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <header className={style.header}>
      <Container>
        <div className={style.backgroundContainer}>
          <div className={style.logoContainer}>
            <Logo />
          </div>

          <div className={style.NavBarAndbuttons}>
            <nav className={style.navBar}>
              <ul className={style.list}>
                <li className={style.item}>
                  <Link to="/" className={style.navLink}>Головна</Link>
                </li>
                <li className={style.item}>
                  <Link to="/locations" className={style.navLink}>Місця відпочинку</Link>
                </li>
                {isLoggedIn && (
                  <li className={style.item}>
                    <Link to={`/profile/${user?.id}`} className={style.navLink}>
                      Мій профіль
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

            <div className={style.desctopBtns} style={{ display: isLoggedIn ? "flex" : "flex" }}>
              <button className={style.shareLoctionBtn} onClick={handleShareLocation}>
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
              <button className={style.logOutBtn}>
                {" "}
                <LogOut />
              </button>
            </div>

            {isLoggedIn && (
              <div className={style.userInfo} onClick={toggleUserMenu}>
                <div className={style.UserAvatarAndName}>
                  <img className={style.userAvatar} src={user?.avatar} alt="UserAvatar" />
                  <p>{user?.name}</p>
                </div>
                {isOpenUserMenu && <UserMenu />}
                <button className={style.logOutBtn}>
                  <LogOut />
                </button>
              </div>
            )}
          </div>

          <div className={style.mobileNavBarAndButtons}>
            <button className={style.burgerMenu} onClick={toggleBurger}>
              <BuregerMenu className={style.burgerMenuIcon} />
            </button>
              <button className={style.burgerMenu} onClick={openBurger}>
                <BuregerMenu className={style.burgerMenuIcon} />
              </button>
              <MenuHeader isOpen={isOpen} isLoggedIn={isLoggedIn} openUserMenu={openUserMenu} isOpenMenu={isOpenMenu} />
          </div>
        </div>
      </Container>
    </header>
  );
};
