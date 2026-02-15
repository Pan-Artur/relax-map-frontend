import style from "./footer.module.scss";
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
        <div className={style.footer_footerContainer}>
          <div className={style.footer__footerContainer__topFooterContainer}>
            <div className={style.footer__footerContainer__topFooterContainer__logoContainer}>
              <Logo />
            </div>
            <div className={style.footer__footerContainer__topFooterContainer__socialContainer}>
              <Facebook className={style.footer__footerContainer__topFooterContainer__socialContainer__socialIcon} />
              <Instagram className={style.footer__footerContainer__topFooterContainer__socialContainer__socialIcon} />
              <Twitter className={style.footer__footerContainer__topFooterContainer__socialContainer__socialIcon} />
              <Youtube className={style.footer__footerContainer__topFooterContainer__socialContainer__socialIcon} />
            </div>
            <div className={style.footer__footerContainer__topFooterContainer__footerNavBar}>
              <NavBar isFooter />
            </div>
          </div>
          <div className={style.footer__footerContainer__bottomFooterContainer}>
            <p className={style.footer__footerContainer__bottomFooterContainer__footerCopyright}>
              © 2025 Природні Мандри. Усі права захищені.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
