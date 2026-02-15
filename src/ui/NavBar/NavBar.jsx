import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoggedIn, selectUser } from "../../app/store/authSelectors";

import style from "./NavBar.module.css";

export const NavBar = ({ isFooter = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <nav
      className={style.navBar}
    >
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="/" className={style.navLink}>
            Головна
          </Link>{" "}
        </li>
        <li className={style.item}>
          {" "}
          <Link to="/locations" className={style.navLink}>
            Місця відпочинку
          </Link>
        </li>
        <li
          className={style.item}
          style={{ display: isLoggedIn && !isFooter ? "block" : "none" }}
        >
          <Link to={`/profile/${user?.id}`} className={style.navLink}>
            Мій Профіль
          </Link>
        </li>
      </ul>
    </nav>
  );
};
