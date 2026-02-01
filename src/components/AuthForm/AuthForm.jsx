import React from 'react'
import style from './AuthForm.module.css'

import { api } from '../../app/services/apiClient'

// id = login or register. register default value
export function AuthForm({ id = 'register' }) {
	let errors = {
		username: '',
		email: '',
		password: '',
	}

	const clearErrors = () => {
		errors = {
			username: '',
			email: '',
			password: '',
		}
	}

	const setError = (element, error) => {
		errors[element.name] = error
	}

	const setErrorStyles = (elements) => {
		Object.keys(errors).forEach((key) => {
			if (errors[key]) {
				elements[key].classList.add(style.errorInput)
				elements[key].value = ''

				const errorElement = document.getElementById(`${key}Error`)
				errorElement.textContent = errors[key]
				errorElement.classList.add(style.unHidden)
			} else {
				elements[key].classList.remove(style.errorInput)

				const errorElement = document.getElementById(`${key}Error`)
				errorElement.textContent = 'error'
				errorElement.classList.remove(style.unHidden)
			}
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const elements = e.target.elements
		const email = elements.email
		const password = elements.password

		const authData = { email: email.value, password: password.value }

		if (id === 'register') {
			const username = elements.username

			authData.username = username.value
			// clear existing errors
			clearErrors()

			// username validation
			if (username.value.length < 4) {
				setError(username, 'Імʼя повинно містити не менше 4 символів')
			}

			if (username.value.length > 20) {
				setError(username, 'Імʼя повинно містити не більше 20 символів')
			}

			// email validation
			if (!email.value) {
				setError(email, 'Поле не може бути порожнім')
			}

			if (!email.value.includes('@')) {
				setError(email, 'Некоректна електронна адреса')
			}

			// password validation
			if (!password.value) {
				setError(password, 'Поле не може бути порожнім')
			}

			if (password.value.length < 8) {
				setError(password, 'Пароль повинен містити не менше 8 символів')
			}

			if (
				!password.value.match(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
				)
			) {
				setError(
					password,
					'Пароль повинен містити хоча б одну велику і малу літеру, одну цифру і один спеціальний символ',
				)
			}

			setErrorStyles(elements)

			try {
				api.register(JSON.stringify(authData))
			} catch (error) {
				console.log(`error while registration ${error}`)
			}
		} else {
			try {
				await api.login(JSON.stringify(authData))
			} catch (error) {
				console.log(`error while logging in: ${error}`)
			}
		}
	}

	//TODO: finish auth logic (api is broken rn)

	return (
		<div className={style.box}>
			<h3 className={style.title}>
				{id === 'register' ? 'Реєстрація' : 'Вхід'}
			</h3>
			<form onSubmit={handleSubmit} className={style.form}>
				<ul className={style.list}>
					{id === 'register' && (
						<li className={style.item}>
							<label htmlFor='username' className={style.label}>
								Імʼя*
							</label>
							<input
								type='text'
								className={`${style.input}`}
								name='username'
								placeholder='Ваше імʼя'
							/>
							<p id='usernameError' className={`${style.errorText}`}>
								error
							</p>
						</li>
					)}
					<li className={style.item}>
						<label htmlFor='email' className={style.label}>
							Пошта*
						</label>
						<input
							type='text'
							className={style.input}
							name='email'
							placeholder='hello@relaxmap.ua'
						/>
						<p id='emailError' className={style.errorText}>
							test error
						</p>
					</li>
					<li className={style.item}>
						<label htmlFor='password' className={style.label}>
							Пароль*
						</label>
						<input
							type='password'
							className={style.input}
							name='password'
							placeholder='********'
						/>
						<p id='passwordError' className={style.errorText}>
							error
						</p>
					</li>
				</ul>
				<button type='submit' className={style.button}>
					{id === 'register' ? 'Зареєструватись' : 'Увійти'}
				</button>
			</form>
		</div>
	)
}
