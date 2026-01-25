import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroBlock.module.css";

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
            <div className={styles.overlay} />
            <div className={styles.hero_content}>
                <h1 className={styles.hero_header}>
                    Відкрий для себе Україну. Знайди ідеальне місце для відпочинку
                </h1>
                <p>
                    Тисячі перевірених локацій з реальними фото та відгуками від
                    мандрівників
                </p>


                <div className={styles.search_box}>
                    <input
                        type="text"
                        placeholder="Введіть назву, тип або регіон..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={handleSearch}>Знайти місце</button>
                </div>
            </div>
        </section>
    );
}