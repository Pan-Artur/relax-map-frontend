import { useState } from "react";
import style from "./header.module.css";
import { Logo } from "./Logo.jsx";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
import { Button } from "./Button.jsx";
import { ReactComponent as BuregerMenu } from '../assets/icons/burger.svg';
import { ReactComponent as LogOut} from '../assets/icons/LogOut.svg'
import { UserMenu } from "./UserMenu.jsx";
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
          <NavBar isLogin={"kjh"} />
          <div className={style.desctopBtns } style={{display:isAuth ? "none" : "flex" }}>
            <Button/>
          </div>
            <div className={style.userInfo} style={{display: isAuth ? "flex" : "none"}}>
                <button className={style.shareLoctionBtn}>Поділитись локацією</button>
                <div className={style.UserAvatarAndName} onClick={openUserMenu}>
                    <img className={style.userAvatar} src={userAvatar} alt="UserAvatar" />
                    <p>{nameUser}</p>
                </div>
                {isOpenMenu && <UserMenu />}
                <button className={style.logOutBtn}> <LogOut/></button>
            </div>
        </div>
        <div className={style.mobileNavBarAndButtons}>
          <div className={style.mobileBtns} style={{display:isAuth ? "none" : "flex" }}>
            <Button/>
          </div>
          <button className={style.shareLoctionBtn} style={{display: isAuth ? "flex" : "none"}}>Поділитись локацією</button>
        <div className={style.mobileNavContainer}>
          <button className={style.burgerMenu} onClick={openBurger}>
            <BuregerMenu className={style.burgerMenuIcon}/>
          </button>

          <ul className={`${isOpen ? style.mobileList : style.burgerMenuDisable}`}>
            <li className={style.mobileItem}>
              <Link to={"/"} className={style.mobileNavLink}>Головна</Link>
            </li>
            <li className={style.mobileItem}>
              <Link to={"/locations"} className={style.mobileNavLink}>Місця відпочинку</Link> 
            </li>
            <li className={style.mobileItem}>
              <Link to={"/profile/:userId"} className={style.mobileNavLink} style={{display: isAuth ? "flex" : "none"}}>Мій Профіль</Link>
            </li>
            <div className={style.UserAvatarAndName} onClick={openUserMenu} style={{display: isAuth ? "flex" : "none"}}>
              <img className={style.userAvatar} src={userAvatar} alt="UserAvatar" />
              <p>{nameUser}</p>
            </div>
            {isOpenMenu && <UserMenu />}
            <button className={style.shareLoctionMobileBtn} style={{display: isAuth ? "flex" : "none"}}>Поділитись локацією</button>
            <button className={style.logOutBtn} style={{display: isAuth ? "flex" : "none"}}> <LogOut/></button>
            <div className={style.burgerMobileBtns} style={{display:isAuth ? "none" : "flex" }}>
              <Button/>
            </div>
          </ul>
        </div>

          
        </div>
      </div>
    </header>
  );
};
