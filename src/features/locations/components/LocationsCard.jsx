import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import styles from "./LocationsCard.module.scss";
import { Link } from "react-router-dom";

export const LocationsCard = ({ place, image, rating, title, id }) => {
  const fullStars = Math.floor(rating / 2);
  const isHalfStar = (rating / 2) % 1 !== 0;
  const ratingArray = Array.from({ length: fullStars }, (_, i) => i);

  return (
    <>
      <img className={styles.locationsCardImg} src={image} alt="" />
      <div className={styles.locationsCardBox}>
        <p className={styles.locationsCardText}>{place}</p>
        <ul className={styles.locationsCardList}>
          {ratingArray.map((item) => (
            <li key={item} className={styles.locationsCardIcon}>
              <FaStar size="17px" />
            </li>
          ))}
          {isHalfStar && (
            <li className={styles.locationsCardIcon}>
              <FaStarHalfAlt size="17px" />
            </li>
          )}
        </ul>

        <h2 className={styles.locationsCardTitle}>{title}</h2>
        <Link to={`/locations/${id}`}>
          <button type="button" className={styles.locationsCardButton}>
            Переглянути локацію
          </button>
        </Link>
      </div>
    </>
  );
};
