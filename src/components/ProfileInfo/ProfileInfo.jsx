import React from 'react'

import { api } from '../../app/services/apiClient.js'
import style from './ProfileInfo.module.css'
import { useParams } from 'react-router-dom'

export function ProfileInfo() {
	const { userId } = useParams()
	// const { id } = api.me()
	const user = api.me()
	console.log(userId)

	return (
		<section className={style.section}>
			<img className={style.image} src={user.avatar} alt='user avatar' />
			<div className={style.box}>
				<h2 className={style.name}>{user.name}</h2>
				<p className={style.articlesCount}>
					{user.locationsCount || 'test value'}
				</p>
			</div>
		</section>
	)
}
