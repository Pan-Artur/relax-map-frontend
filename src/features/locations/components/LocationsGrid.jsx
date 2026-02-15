import { LocationsCard } from "./LocationsCard";
import styles from "./LocationsGrid.module.scss";
import { Container } from "../../../components/Container/Container";
import { api } from "../../../app/services/apiClient";
import { useState, useEffect } from "react";

// id can be underfined
export const LocationsGrid = ({ locationsData }) => {
//   const [locationsData, setLocationsData] = useState([]);

 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (id) {
//           const data = await api.getUserLocations(id);
//           setLocationsData(data.data);
//         } else {
//           const data = await api.getLocations();
//           setLocationsData(data.data.items);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [id]);

  //   if (id) {
  //     api.getUserLocations(id).then((data) => {
  //       console.log(data);
  //       setLocationsData(data);
  //     });
  //   } else {
  //     api.getLocations().then((data) => {
  //       // console.log(data.items);

  //       setLocationsData(data.items);
  //     });
  //   }

  return (
    <Container>
      <ul className={styles.locationsGrid}>
        {locationsData.map((location) => (
          <li className={styles.locationsGridCard} key={location.id}>
            <LocationsCard
			  id={location.id}
              place={location.place}
              image={location.poster}
              rating={location.rate}
              title={location.title}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
