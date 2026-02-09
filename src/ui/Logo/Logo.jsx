import style from './logo.module.css'
import {ReactComponent as LogoIcon} from '../../assets/icons/logo.svg'
export const Logo = () => {
    return(
        <>
            <LogoIcon className={style.iconImg}/>
            <h2 className={style.iconTitle}>Relax Map</h2>
        </>
    )
}