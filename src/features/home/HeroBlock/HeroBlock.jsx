import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeroBlock.module.scss";
import { Container } from "../../../components/Container/Container.jsx"
import { Link } from "react-router-dom";

// import { Container } from '../../components/Container/Container';

export function HeroBlock() {
    const [keyword, setKeyword] = useState("");
    

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
                <h1>
                    Відкрий для себе Україну. Знайди ідеальне місце для відпочинку
                </h1>
                <p>
                    Тисячі перевірених локацій з реальними фото та відгуками від мандрівників
                </p>

                <form  className={styles.searchBox}>
                    <input
                        onChange={(e) => setKeyword(e.target.value)}
                        name='input'
                        type="text"
                        placeholder="Введіть назву, тип або регіон..."
                    />
                    {console.log(keyword)}
                    <Link to="/locations" state={{ search: keyword }}>
                        <button type='submit'>Знайти місце</button>
                    </Link>
                    
                </form>
                </div>
            </div>
            </Container>
        </section>
    );
}