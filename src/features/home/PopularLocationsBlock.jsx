import { useEffect, useState } from "react";
import { fetchPopularLocations } from "./api.js";
import { LocationsCard }  from "../../features/locations/components/LocationsCard.jsx";
import styles from "./PopularLocationsBlock.module.scss";

export default function PopularLocationsBlock() {
  const [locations, setLocations] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchPopularLocations().then(setLocations);
  }, []);

  const next = () =>
    setIndex((i) => Math.min(i + 1, locations.length - 3));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className={styles.popular}>
      <div className={styles.popular__header}>
        <h2>Популярні локації</h2>
        <button><p>Всі локації</p></button>
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
          <button onClick={prev}><img src="https://image2url.com/r2/default/images/1769949318051-2ac4694b-8a69-4bef-a9fc-cbd89d568586.png" alt="arrow-left" /></button>
          <button onClick={next}><img src="https://image2url.com/r2/default/images/1769949404539-8e425d1e-d30b-4aaa-88d5-02f311c752c4.png" alt="arrow-right" /></button>
        </div>
    </section>
  );
}