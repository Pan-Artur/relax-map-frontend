// import { useEffect, useState } from "react";
// import { fetchPopularLocations } from "./api";
// import LocationsCard from "../../features/locations/components/LocationCard";
// import "./PopularLocationsBlock.module.scss";
import { useEffect, useState } from "react";
import { fetchPopularLocations } from "./api";
import { LocationCard } from "./LocationCard.jsx";

// export default function PopularLocationsBlock() {
//   const [locations, setLocations] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     fetchPopularLocations().then(setLocations);
//   }, []);

//   const next = () =>
//     setIndex((i) => Math.min(i + 1, locations.length - 3));
//   const prev = () => setIndex((i) => Math.max(i - 1, 0));

//   return (
//     <section className="popular">
//       <div className="popular__header">
//         <h2>Популярні локації</h2>

//         <div className="popular__nav">
//           <button onClick={prev}>←</button>
//           <button onClick={next}>→</button>
//         </div>
//       </div>

//       <div className="popular__slider">
//         <div
//           className="popular__track"
//           style={{ transform: `translateX(-${index * 300}px)` }}
//         >
//           {locations.map((item) => (
//             <LocationsCard key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }