import { FilterPanel } from "../components/FilterPanel";
import styles from "../components/FilterPanel.module.scss";
import { useState, useEffect } from "react";
import { api } from "../../../app/services/apiClient";

import { LocationsGrid } from "../components/LocationsGrid";

export const LocationsPage = ({id}) => {
  const regions = [
    { id: "", label: "Вся Україна" },
    { id: "kyivska", label: "Київська " },
    { id: "zitomirska", label: "Житомирська " },
    { id: "kirovogradska", label: "Кіровоградська " },
    { id: "poltavska", label: "Полтавська " },
    { id: "cherkaska", label: "Черкаська " },
    { id: "volinska", label: "Волинська " },
    { id: "dnipropetrovska", label: "Дніпро" },
    { id: "donetska", label: "Донецька " },
    { id: "zakarpatska", label: "Закарпатська " },
    { id: "zaporizka", label: "Запорізька " },
    { id: "ivanoFrankivska", label: "Івано-Франківська " },
    { id: "luganska", label: "Луганська " },
    { id: "lvivska", label: "Львівська " },
    { id: "mikolaivska", label: "Миколаївська " },
    { id: "odeska", label: "Одеська " },
    { id: "rivenska", label: "Рівненська " },
    { id: "ternopilska", label: "Тернопільська " },
    { id: "kharkivska", label: "Харківська " },
    { id: "hmelnicka", label: "Хмельницька " },
    { id: "chernivecka", label: "Чернівецька " },
    { id: "chernigivska", label: "Чернігівська " },
    { id: "hersonska", label: "Херсонська " },
    { id: "sumska", label: "Сумська " },
    { id: "krim", label: "АР Крим" },
    { id: "vinnicka", label: "Вінницька " },
  ];

  const places = [
    { id: "beach", label: "Пляж" },
    { id: "camping", label: "Кемпінг" },
    { id: "park", label: "Парк" },
    { id: "monument", label: "Іст. пам'ятка" },
  ];

  const sortOptions = [
    { id: "popular", label: "За популярністю" },
    { id: "new", label: "Новіші спочатку" },
  ];

  const [locationsData, setLocationsData] = useState([]);
  
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (id) {
            const data = await api.getUserLocations(id);
            setLocationsData(data.data);
            
          } else {
            const data = await api.getLocations();
            setLocationsData(data.data.items);
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [id]);

  const [selectedRegion, setSelectedRegion] = useState({
    id: "",
    label: "Область",
  });
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedSort, setSelectedSort] = useState({
    id: "",
    label: "Сортування",
  });
  const [inputData, setInputData] = useState("");

  const togglePlace = (place) => {
    const exists = selectedPlaces.find((p) => p.id === place.id);
    if (exists) {
      setSelectedPlaces(selectedPlaces.filter((p) => p.id !== place.id));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
      console.log(selectedPlaces);
    }
  };

  const selectedIds = selectedPlaces.map((p) => p.label);
  const filteredData = locationsData
    .filter(
      (location) =>
        selectedRegion.id === "" || location.region === `${selectedRegion.label}область`,
    )
    .filter(
      (location) =>
        selectedIds.length === 0 || selectedIds.includes(location.place),
    )
    .filter(
      (location) => inputData === "" || location.title.toLowerCase().includes(inputData.toLowerCase()),
    );
  if (selectedSort.id === "") {
  } else if (selectedSort.id === "popular") {
    filteredData.sort((a, b) => b.rate - a.rate);
  }
  console.log(filteredData)
  return (
    <>
      <h2 className={styles.title}>Усі місця відпочинку</h2>
      <FilterPanel
        regions={regions}
        places={places}
        sortOptions={sortOptions}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        selectedPlaces={selectedPlaces}
        setSelectedPlaces={setSelectedPlaces}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        togglePlace={togglePlace}
        inputData={inputData}
        setInputData={setInputData}
      />

      <LocationsGrid locationsData={filteredData} />
    </>
  );
};
