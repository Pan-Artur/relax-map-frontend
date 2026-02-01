import React from 'react'
import style from './ProfilePlaceholder.module.css'
import { Link, useParams } from 'react-router-dom'

export function ProfilePlaceholder() {
	const { userId } = useParams()
	// const { id } = api.me()
	const id = '3fa85f64-5717-4562-b3fc-2c963f66afa6'

	return (
		<div className={style.container}>
			<div className={style.box}>
				<p className={style.text}>
					{userId === id
						? 'Ви ще нічого не публікували, поділіться своєю першою локацією!'
						: 'Цей користувач ще не ділився локаціями'}
				</p>
				<Link
					to={{
						pathname: userId === id ? '/locations/add' : '/locations',
					}}
				>
					<button type='button' className={style.button}>
						{userId === id ? 'Поділитись локацією' : 'Назад до локацій'}
					</button>
				</Link>
			</div>
		</div>
	)
}
