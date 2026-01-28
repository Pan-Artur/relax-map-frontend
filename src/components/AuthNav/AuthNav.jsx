import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export function AuthNav() {
	return (
		<div className={style.navContainer}>
			<NavLink
				to="/auth/register"
				className={({ isActive }) =>
					`${style.link} ${isActive ? style.active : ""}`
				}
			>
				Реєстрація
			</NavLink>
			<NavLink
				to="/auth/login"
				className={({ isActive }) =>
					`${style.link} ${isActive ? style.active : ""}`
				}
			>
				Вхід
			</NavLink>
		</div>
	);
}
