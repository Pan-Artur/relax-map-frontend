import style from './ProfilePage.module.css'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import { ProfilePlaceholder } from '../../components/ProfilePlaceholder/ProfilePlaceholder'

export const ProfilePage = () => {
	// TODO: articlesAmount logic

	const articlesAmount = 0

	return (
		<div className={style.container}>
			<ProfileInfo />

			{articlesAmount === 0 ? <ProfilePlaceholder /> : null}
		</div>
	)
}
