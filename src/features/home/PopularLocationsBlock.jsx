import { useEffect, useState } from "react";
import { fetchPopularLocations } from "./api";
import { LocationCard } from "./LocationCard.jsx";

export default function PopularLocationsBlock() {
  const [locations, setLocations] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchPopularLocations().then(setLocations);
  }, []);

  const next = () => setIndex((i) => Math.min(i + 1, locations.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section>
      <h2>Популярні локації</h2>

      <button onClick={prev}>←</button>
      <button onClick={next}>→</button>

      <div style={{ display: "flex", gap: 16 }}>
        {locations.map((item) => (
          <LocationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}