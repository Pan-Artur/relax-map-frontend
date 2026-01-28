import { Link } from "react-router-dom"
import style from './UserMenu.module.css'
export const UserMenu = () => {

    return(
        <ul className={style.userList}>
            <li className={style.userItem}><Link className={style.changeAvatar}>Зміна аватару</Link></li>
        </ul>
    )
}