import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
export const NavBar = ({isLogin}) => {
    return(
        <nav className={style.navBar} style={{width: isLogin ? '426px' : '275px'}}>
            <ul className={style.list}>
                <li className={style.item}><Link to="#" className={style.navLink}>Головна</Link> </li>
                <li className={style.item}> <Link to="#" className={style.navLink}>Місця відпочинку</Link></li>
                <li className={style.item} style={{display: isLogin ? "block" : "none",}}><Link to="#" className={style.navLink}>Мій Профіль</Link></li>
            </ul>
        </nav>
    )
}