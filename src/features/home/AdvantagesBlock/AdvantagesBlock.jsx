import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdvantagesBlock.module.scss";
import { Container } from "../../../components/Container/Container.jsx";

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
            <Container>
              <div className={styles.container}>
            <h2 className={styles.advantagesTitle}>Ключові переваги</h2>

            <div className={styles.advantagesGrid}>
                <div className={styles.advCard}>
                    <img className={styles.icon} src="https://image2url.com/r2/default/images/1769343188975-890344d4-29a2-41b9-bd21-ff0a9eaf8136.png" alt="select_check_box" />
                    <h3>Реальні відгуки</h3>
                    <p>
                        Користувачі діляться чесними враженнями, щоб ви робили правильний вибір.
                    </p>
                </div>
                <div className={styles.advCard}>
                    <img className={styles.icon} src="https://image2url.com/r2/default/images/1769343348929-468db638-5c00-4f0b-b473-2ee6f28e64ce.png" alt="filter" />
                    <h3>Зручні фільтри</h3>
                    <p>
                        Шукайте за типом локації, регіоном, наявністю зручностей та іншими критеріями.
                    </p>
                </div>
                <div className={styles.advCard}>
                    <img className={styles.icon} src="https://image2url.com/r2/default/images/1769343389057-7d08eafe-0497-4f47-a6c3-7342d621f0cf.png" alt="communication" />
                    <h3>Спільнота мандрівників</h3>
                    <p>
                        Додавайте власні улюблені місця та діліться своїми неймовірними знахідками.
                    </p>
                </div>
            </div>
            </div>
            </Container>
        </section>

    );
}