import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import styles from './LocationsCard.module.scss'

export const LocationsCard = ({  place, image, rating, title  }) => {
  return (
    <>
      <div className={styles.locationsCardImg}></div>
      <div className={styles.locationsCardBox}>
        <p className={styles.locationsCardText}>{place}</p>
        <ul  className={styles.locationsCardList}>
            <li className={styles.locationsCardIcon}><FaStar size='17px' /></li>
            <li className={styles.locationsCardIcon}><FaStar size='17px' /></li>
            <li className={styles.locationsCardIcon}><FaStar size='17px' /></li>
            <li className={styles.locationsCardIcon}><FaStar size='17px' /></li>
            <li className={styles.locationsCardIcon}><FaStarHalfAlt  size='17px'/></li>
        </ul>
          
        
        <h2 className={styles.locationsCardTitle}>{title}</h2>
        <button type="button" className={styles.locationsCardButton}>Переглянути локацію</button>
      </div>
    </>
  );
};
