import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../app/store/authSelectors';

import style from './NavBar.module.css';

export const NavBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return(
        <nav className={style.navBar} style={{width: isLoggedIn ? '426px' : '275px'}}>
            <ul className={style.list}>
                <li className={style.item}><Link to="/" className={style.navLink}>Головна</Link> </li>
                <li className={style.item}> <Link to="/locations" className={style.navLink}>Місця відпочинку</Link></li>
                <li className={style.item} style={{display: isLoggedIn ? "block" : "none",}}><Link to={`/profile/${user.id}`} className={style.navLink}>Мій Профіль</Link></li>
            </ul>
        </nav>
    )
}