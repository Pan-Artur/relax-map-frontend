import { useState } from "react";
import style from "./header.module.css";
import { Logo } from "./Logo.jsx";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
import { Button } from "./Button.jsx";
export const Header = ({isAuth,userAvatar,nameUser}) => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenMenu,setOpenMenu] = useState(false)
  const openBurger = () => {
    setOpen(!isOpen);
  };
  const openUserMenu = () => {
    setOpenMenu(!isOpenMenu)
  }
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <Logo />
        </div>
        <div className={style.NavBarAndbuttons}>
          <NavBar isLogin={'#'} />
          <div className={style.desctopBtns } style={{display:isAuth ? "none" : "flex" }}>
            <Button/>
          </div>
            <div className={style.userInfo} style={{display: isAuth ? "flex" : "none"}}>
                <button className={style.shareLactionBtn}>Поділитись локацією</button>
                <div className={style.UserAvatarAndName} onClick={openUserMenu}>
                    <img className={style.userAvatar} src={userAvatar} alt="UserAvatar" />
                    <p>{nameUser}</p>
                </div>
                <ul className={style.userList} style={{display:isOpenMenu ? "block" : "none"}}>
                  <li className={style.userItem}><Link className={style.changeAvatar}>Зміна аватару</Link></li>
                </ul>
                <button className={style.logOutBtn}></button>
            </div>
        </div>
        <div className={style.mobileNavBarAndButtons}>
          <div className={style.mobileBtns}>
            <Button/>
          </div>
        <div className={style.mobileNavContainer}>
          <button className={style.burgerMenu} onClick={openBurger}>
            <img className={style.burgerMenuIcon} src="https://i.ibb.co/wFS0Gg6t/Vector-1.png" alt="menu"
            />
          </button>

          <ul className={`${isOpen ? style.mobileList : style.burgerMenuDisable}`}>
            <li className={style.mobileItem}>
              <Link to={""} className={style.mobileNavLink}>Головна</Link>
            </li>
            <li className={style.mobileItem}>
              <Link to={""} className={style.mobileNavLink}>Місця відпочинку</Link> 
            </li>
            <li className={style.mobileItem}>
              <Link to={""} className={style.mobileNavLink}>Мій Профіль</Link>
            </li>
            <div className={style.burgerMobileBtns}>
              <Button/>
            </div>
          </ul>
        </div>

          
        </div>
      </div>
    </header>
  );
};
