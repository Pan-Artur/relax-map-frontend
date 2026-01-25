import style from './footer.module.css'
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.topFooterContainer}>
          <div className={style.logoContainer}>
            logo
          </div>
          <div className={style.socialContainer}>
            fb  inst  X yt
          </div>
          <div className={style.footerNavBar}>NavBar</div>
        </div>
        <div className={style.bottomFooterContainer}>
          <p className={style.FooterCopyright}>© 2025 Природні Мандри. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};