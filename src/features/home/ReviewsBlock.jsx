import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ReviewsBlock.module.scss"

const fetchReviews = async () => [
  {
    id: 1,
    rating: 5,
    text: "Неймовірне місце для перезавантаження. Природа просто вау!",
    author: "Олена Коваль",
    locationType: "Море",
  },
  {
    id: 2,
    rating: 4,
    text: "Тихо, спокійно, дуже атмосферно. Обовʼязково повернусь.",
    author: "Ігор Петров",
    locationType: "Гори",
  },
  {
    id: 3,
    rating: 5,
    text: "Ідеальне місце для відпочинку від міської метушні.",
    author: "Марія Шевченко",
    locationType: "Ліс",
  },
    {
    id: 4,
    rating: 5,
    text: "Неймовірне місце для перезавантаження. Природа просто вау!",
    author: "Олена Коваль",
    locationType: "Море",
  },
  {
    id: 5,
    rating: 4,
    text: "Тихо, спокійно, дуже атмосферно. Обовʼязково повернусь.",
    author: "Ігор Петров",
    locationType: "Гори",
  },
  {
    id: 6,
    rating: 5,
    text: "Ідеальне місце для відпочинку від міської метушні.",
    author: "Марія Шевченко",
    locationType: "Ліс",
  },
];

export default function ReviewsBlock() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchReviews().then(setReviews);
  }, []);

  const next = () =>
    setIndex((i) => Math.min(i + 1, reviews.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className={styles.reviews}>
      <div className={styles.reviews__header}>
        <h2>Останні відгуки</h2>

        <div className={styles.reviews__slider}>
          <div
            className={styles.reviews__track}
            style={{ transform: `translateX(calc(-${index} * (100% + 16px)))`, }}
          >
            {reviews.map((review) => (
              <div key={review.id} className={styles["review-card"]}>
                <div className={styles["review-card__rating"]}>
                  {"★".repeat(review.rating)}
                </div>

                <p className={styles["review-card__text"]}>
                  {review.text}
                </p>

                <div className={styles["review-card__footer"]}>
                  <span className={styles["review-card__author"]}>
                    {review.author}
                  </span>
                  <span className={styles["review-card__type"]}>
                    {review.locationType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.reviews__nav}>
          <button onClick={prev}><img src="https://image2url.com/r2/default/images/1769949318051-2ac4694b-8a69-4bef-a9fc-cbd89d568586.png" alt="arrow-left" /></button>
          <button onClick={next}><img src="https://image2url.com/r2/default/images/1769949404539-8e425d1e-d30b-4aaa-88d5-02f311c752c4.png" alt="arrow-right" /></button>
        </div>
      </div>
    </section>
  );
}