import style from './footer.module.css'
import { Logo } from './Logo';
import { NavBar } from './NavBar';
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.topFooterContainer}>
          <div className={style.logoContainer}>
            <Logo/>
          </div>
          <div className={style.socialContainer}>
            <div>fb</div> <div>inst</div> <div>X</div> <div style={{ minWidth: "24px",minHeight: "24" }}>yt</div>
          </div>
          <div className={style.footerNavBar}>
            <NavBar/>
          </div>
        </div>
        <div className={style.bottomFooterContainer}>
          <p className={style.FooterCopyright}>© 2025 Природні Мандри. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};