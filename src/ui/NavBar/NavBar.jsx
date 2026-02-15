import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoggedIn, selectUser } from "../../app/store/authSelectors";

import style from "./NavBar.module.scss";

export const NavBar = ({ isFooter = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav
      className={style.navBar}
    >
      <ul className={style.navBar__list}>
        <li className={style.navBar__list__item}>
          <Link to="/" className={style.navBar__list__item__navLink}>
            Головна
          </Link>{" "}
        </li>
        <li className={style.navBar__list__item}>
          {" "}
          <Link to="/locations" className={style.navBar__list__item__navLink}>
            Місця відпочинку
          </Link>
        </li>
        <li
          className={style.navBar__list__item}
          style={{ display: isLoggedIn && !isFooter ? "block" : "none" }}
        >
          <Link to={`/profile/${user?.id}`} className={style.navBar__list__item__navLink}>
            Мій Профіль
          </Link>
        </li>
      </ul>
    </nav>
  );
};
