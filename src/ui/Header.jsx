import { useState } from "react";
import style from "./header.module.css";
import { Logo } from "./Logo.jsx";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
import { Button } from "./Button.jsx";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const openBurger = () => {
    setOpen(!isOpen);
  };
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <Logo />
        </div>
        <div className={style.NavBarAndbuttons}>
          <NavBar />
          <div className={style.desctopBtns }>
            <Button/>
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
