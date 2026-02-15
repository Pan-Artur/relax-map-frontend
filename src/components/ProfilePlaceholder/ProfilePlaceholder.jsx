import React from 'react'
import style from './ProfilePlaceholder.module.css'
import { Link, useParams } from 'react-router-dom'
import { api } from '../../app/services/apiClient'
import { Container } from '../Container/Container'
import { useSelector } from 'react-redux'	
import { selectUser } from '../../app/store/authSelectors'

export function ProfilePlaceholder({ userId }) {
	const loggedId = useSelector(selectUser).id

	return (
		<Container className={style.container}>
			<div className={style.box}>
				<p className={style.text}>
					{userId === loggedId
						? 'Ви ще нічого не публікували, поділіться своєю першою локацією!'
						: 'Цей користувач ще не ділився локаціями'}
				</p>
				<Link
					to={{
						pathname: userId === loggedId ? '/locations/add' : '/locations',
					}}
				>
					<button type='button' className={style.button}>
						{userId === loggedId ? 'Поділитись локацією' : 'Назад до локацій'}
					</button>
				</Link>
			</div>
		</Container>
	)
}
