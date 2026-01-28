import React from "react";
import { Link } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import { Logo } from "../../ui/Logo";
import style from "./AuthPage.module.css";

export const LoginPage = () => {
	return (
		<div className={style.wrapper}>
			<Link to="/" className={style.logo}>
				<Logo />
			</Link>
			<div className={style.container}>
				<div className={style.box}>
					<AuthNav />
					<AuthForm id="login" />
				</div>
			</div>
			<div className={style.footer}>
				<p className={style.footerText}>Copyright © 2023 Relax Map</p>
			</div>
		</div>
	);
};
