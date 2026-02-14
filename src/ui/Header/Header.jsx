import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  const [isOpen, setOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

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

  const openBurger = () => {
    setOpen(!isOpen);
  };

  const openUserMenu = () => {
    setOpenMenu(!isOpenMenu);
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
            <NavBar/>
            <div
              className={style.desctopBtns}
              style={{ display: isLoggedIn ? "none" : "flex" }}
            >
              <Button />
            </div>

              <div className={style.userInfo} onClick={toggleUserMenu} style={{display:isLoggedIn ? "flex": "none"}}>
                <div className={style.UserAvatarAndName}>
                  <img className={style.userAvatar} src={user?.avatar} alt="UserAvatar" />
                  <p>{user?.name}</p>
                </div>
                {isOpenUserMenu && <UserMenu />}
                <button className={style.logOutBtn}>
                  <LogOut />
                </button>
              </div>

          </div>

          <div className={style.mobileNavBarAndButtons}>
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
