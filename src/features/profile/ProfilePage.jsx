import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'

import { api } from '../../app/services/apiClient'

import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo'
import { ProfilePlaceholder } from '../../components/ProfilePlaceholder/ProfilePlaceholder'
import { LocationsGrid } from '../locations/components/LocationsGrid'

import style from './ProfilePage.module.css'

export const ProfilePage = () => {
	const { id } = useParams()
	const [userInfo, setUserInfo] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return

		api
			.getUserById(id)
			.then((res) => setUserInfo(res.data))
			.catch((error) => {
				console.error(error)
				setUserInfo(null)
			})
			.finally(() => setLoading(false))
	}, [id])

	if (!id) return <Navigate to='/' />
	if (loading) return <div>Loading profile...</div>
	if (!userInfo) return <div>User not found</div>

	return (
		<div className={style.container}>
			<ProfileInfo userId={id} user={userInfo} />

			<LocationsGrid id={id} />

			{userInfo.locationsCount === 0 && <ProfilePlaceholder userId={id} />}
		</div>
	)
}
