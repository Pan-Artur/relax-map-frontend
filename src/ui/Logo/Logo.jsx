import { Link } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";

import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/" className={style.link}>
      <LogoIcon className={style.link__iconImg} />
      <p className={style.link__iconTitle}>Relax Map</p>
    </Link>
  );
};
