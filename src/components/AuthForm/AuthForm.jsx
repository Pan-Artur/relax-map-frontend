import React from "react";
import style from "./AuthForm.module.css";

// id = login or register. register default value
export function AuthForm({ id = "register" }) {
	let errors = {
		username: "",
		email: "",
		password: "",
	};

	const clearErrors = () => {
		errors = {
			username: "",
			email: "",
			password: "",
		};
	};
	
	const setStyleError = (element, error) => { 
		errors[element] = error
		
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (id === "register") {
			const elements = e.target.elements;
			const username = elements.username.value;
			const email = elements.email.value;
			const password = elements.password.value;
			console.log(username, email, password);
		} else {
			// TODO: implement login logic
		}
	};

	return (
		<div className={style.box}>
			<h3 className={style.title}>
				{id === "register" ? "Реєстрація" : "Вхід"}
			</h3>
			<form onSubmit={handleSubmit} className={style.form}>
				<ul className={style.list}>
					{id === "register" && (
						<li className={style.item}>
							<label htmlFor="username" className={style.label}>
								Імʼя*
							</label>
							<input
								type="text"
								className={`${style.input}`}
								name="username"
								placeholder="Ваше імʼя"
							/>
							<p className={`${style.errorText}`}>error</p>
						</li>
					)}
					<li className={style.item}>
						<label htmlFor="email" className={style.label}>
							Пошта*
						</label>
						<input
							type="email"
							className={style.input}
							name="email"
							placeholder="hello@relaxmap.ua"
						/>
						<p className={style.errorText}>test error</p>
					</li>
					<li className={style.item}>
						<label htmlFor="password" className={style.label}>
							Пароль*
						</label>
						<input
							type="password"
							className={style.input}
							name="password"
							placeholder="********"
						/>
						<p className={style.errorText}>error</p>
					</li>
				</ul>
				<button type="submit" className={style.button}>
					{id === "register" ? "Зареєструватись" : "Увійти"}
				</button>
			</form>
		</div>
	);
}
