import style from './button.module.css'
export const Button = () => {

    return(
        <>
            <button className={style.signInBtn}>Вхід</button>
            <button className={style.signUpBtn}>Реєстрація</button>
            
        </>
        
    )
}
