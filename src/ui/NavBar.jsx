import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
export const NavBar = () => {
    return(
        <nav className={style.navBar}>
            <ul className={style.list}>
                <li className={style.item}><Link to="/" className={style.navLink}>Головна</Link> </li>
                <li className={style.item}> <Link to="/locations" className={style.navLink}>Місця відпочинку</Link></li>
            </ul>
        </nav>
    )
}