import style from './ProfilePage.module.css'
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import { ProfilePlaceholder } from '../../components/ProfilePlaceholder/ProfilePlaceholder'
import { useParams } from 'react-router-dom'
import { api } from '../../app/services/apiClient'

export const ProfilePage = () => {
	const { userId } = useParams()
	const userInfo = api.getUserById(userId)
	// const userId = 'asdds-123-dasdass'
	// const userInfo = {
	// 	avatar: '',
	// 	name: 'vots',
	// 	locationsCount: 0,
	// }

	return (
		<div className={style.container}>
			<ProfileInfo userId={userId} user={userInfo} />

			{/* TODO: location grid add */}

			{userInfo.locationsCount === 0 ? (
				<ProfilePlaceholder userId={userId} />
			) : null}
		</div>
	)
}
