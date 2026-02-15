import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroBlock.module.scss";
import { Container } from "../../../components/Container/Container.jsx"
// import { Container } from '../../components/Container/Container';

export function HeroBlock() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();


    const handleSearch = () => {
        if (!query.trim()) return;
        navigate(`/locations?search=${encodeURIComponent(query.trim())}`);
    };


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };


    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage:
                    "url('https://image2url.com/r2/default/images/1769280502355-41660871-593c-4c8f-a255-694c4b9cfa5d.png')",
            }}
        >
            <Container>
            <div className={styles.heroContent}>
                <div className={styles.heroContent}>
                <h1>
                    Відкрий для себе Україну. Знайди ідеальне місце для відпочинку
                </h1>
                <p>
                    Тисячі перевірених локацій з реальними фото та відгуками від мандрівників
                </p>

                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Введіть назву, тип або регіон..."
                    />
                    <button>Знайти місце</button>
                </div>
                </div>
            </div>
            </Container>
        </section>
    );
}