import style from '../Header/header.module.css'
import { Link } from 'react-router-dom'
import { selectUser } from '../../app/store/authSelectors'
import { useSelector } from 'react-redux'
import { Button } from '../Button/Button'
import { ReactComponent as LogOut } from '../../assets/icons/LogOut.svg'
export const MenuHeader = ({
	isOpen,
	isLoggedIn,
	openUserMenu,
	isOpenMenu,
	modalOpen,
	openBurger,
}) => {
	const user = useSelector(selectUser)
	return (
		<>
			<ul className={`${isOpen ? style.mobileList : style.burgerMenuDisable}`}>
				<li className={style.mobileItem}>
					<Link to={'/'} className={style.mobileNavLink}>
						Головна
					</Link>
				</li>
				<li className={style.mobileItem}>
					<Link to={'/locations'} className={style.mobileNavLink}>
						Місця відпочинку
					</Link>
				</li>
				<li className={style.mobileItem}>
					<Link
						to={`/profile/${user?.id}`}
						className={style.mobileNavLink}
						style={{ display: isLoggedIn ? 'flex' : 'none' }}
					>
						Мій Профіль
					</Link>
				</li>
				<div className={style.ContainerUser}>
					<div
						className={style.UserAvatarAndName}
						onClick={openUserMenu}
						style={{ display: isLoggedIn ? 'flex' : 'none' }}
					>
						<img
							className={style.userAvatar}
							src={user?.avatar}
							alt='UserAvatar'
						/>
						<p>{user?.name}</p>
					</div>
					<button
						className={style.logOutBtn}
						style={{ display: isLoggedIn ? 'flex' : 'none' }}
						onClick={() => {
							modalOpen()
							openBurger()
						}}
					>
						<LogOut />
					</button>
				</div>
				<div
					className={style.burgerMobileBtns}
					style={{ display: isLoggedIn ? 'none' : 'flex' }}
				>
					<Button />
				</div>
			</ul>
		</>
	)
}
