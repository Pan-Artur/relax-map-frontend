import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import style from "./AuthPage.module.css";

export const RegisterPage = () => {
	return (
		<>
			<div className={style.container}>
				<div className={style.box}>
					<AuthNav />
					<AuthForm id="register" />
				</div>
			</div>
		</>
	);
};
