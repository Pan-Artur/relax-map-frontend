import style from './button.module.scss'
import { useNavigate } from 'react-router-dom'
export const Button = () => {
    const navigateToLogin = useNavigate()
    const navigateToRegistration = useNavigate()
    return(
        <>
            <button className={style.signInBtn} onClick={()=> navigateToLogin("/auth/login")}>Вхід</button>
            <button className={style.signUpBtn} onClick={()=> navigateToRegistration("/auth/register")}>Реєстрація</button>
        </>
        
    )
}
