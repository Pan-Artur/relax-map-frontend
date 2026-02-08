import { useEffect, useState } from "react";
import { fetchPopularLocations } from "./api.js";
import { LocationsCard } from "../../features/locations/components/LocationsCard.jsx";
import styles from "./PopularLocationsBlock.module.scss";
import { Container } from "../../components/Container/Container.jsx";
import {ReactComponent as ArrowBack} from '../../assets/icons/arrow_back.svg'
import {ReactComponent as  ArrowNext} from '../../assets/icons/arrow_forward.svg'
import {Swiper,sli} from "swiper";
export default function PopularLocationsBlock() {
  const [locations, setLocations] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchPopularLocations().then(setLocations);
  }, []);

  const next = () => {
    setIndex((i) => (i === locations.length - 1 ? 0 : i + 1));
  };
  const prev = () => {
    setIndex((i) => (i === 0 ? locations.length - 1 : i - 1));
  };
  return (
    <Container>
      <section className={styles.popular}>
        <div className={styles.popular__header}>
          <h2>Популярні локації</h2>
          <button>
            <p>Всі локації</p>
          </button>
        </div>

        <div className={styles.popular__slider}>
          <div
            className={styles.popular__track}
            style={{ transform: `translateX(-${index * 300}px)` }}
          >
            {locations.map((item) => (
              <LocationsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className={styles.popular__nav}>
          <button onClick={prev}>
            <ArrowBack/>
          </button>
          <button onClick={next}>
            <ArrowNext/>
          </button>
        </div>
      </section>
    </Container>
  );
}
