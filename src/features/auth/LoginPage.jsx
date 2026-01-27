import React from "react";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import style from "./AuthPage.module.css";

export const LoginPage = () => {
	return (
		<>
			<div className={style.container}>
				<div className={style.box}>
					<AuthNav />
					<AuthForm id="login" />
				</div>
			</div>
		</>
	);
};
