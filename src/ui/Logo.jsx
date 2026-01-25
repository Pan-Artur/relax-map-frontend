import style from './logo.module.css'
export const Logo = () => {
    return(
        <>
            <img className={style.iconImg} src="https://i.ibb.co/dJ2hrqCh/map-search.png" alt="logo" />
            <h2 className={style.iconTitle}>Relax Map</h2>
        </>
    )
}