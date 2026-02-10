import style from "./footer.module.css";
import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/Twitter(X).svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { Container } from "../../components/Container/Container";
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footerContainer}>
          <div className={style.topFooterContainer}>
            <div className={style.logoContainer}>
              <Logo />
            </div>
            <div className={style.socialContainer}>
              <Facebook className={style.socialIcon} />{" "}
              <Instagram className={style.socialIcon} />{" "}
              <Twitter className={style.socialIcon} />{" "}
              <Youtube className={style.socialIcon} />
            </div>
            <div className={style.footerNavBar}>
              <NavBar footer={false} />
            </div>
          </div>
          <div className={style.bottomFooterContainer}>
            <p className={style.FooterCopyright}>
              © 2025 Природні Мандри. Усі права захищені.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
