import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdvantagesBlock.module.css";

export function AdvantagesBlock() {
    const advantages = [
        {
            id: 1,
            icon: "✔️",
            title: "Реальні відгуки",
            description:
                "Користувачі діляться чесними враженнями, щоб ви робили правильний вибір.",
        },
        {
            id: 2,
            icon: "🔎",
            title: "Зручні фільтри",
            description:
                "Шукайте за типом локації, регіоном, наявністю зручностей та іншими критеріями.",
        },
        {
            id: 3,
            icon: "👥",
            title: "Спільнота мандрівників",
            description:
                "Додавайте власні улюблені місця та діліться своїми неймовірними знахідками.",
        },
    ];


    return (
        <section className={styles.advantages}>
            <h2>Ключові переваги</h2>
            <div className={styles.advantages_grid}>
                {advantages.map(({ id, icon, title, description }) => (
                    <div key={id} className="adv-card">
                        <span className="icon">{icon}</span>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}