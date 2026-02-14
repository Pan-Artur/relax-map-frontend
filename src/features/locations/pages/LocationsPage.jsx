import { FilterPanel } from "../components/FilterPanel";
import styles from "../components/FilterPanel.module.scss";
import { useState } from "react";

import { LocationsGrid } from "../components/LocationsGrid";

export const LocationsPage = () => {
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
    { id: "highRated", label: "За рейтингом" },
    { id: "new", label: "Новіші спочатку" },
  ];

  const locationsData = [
    {
      id: 1,
      rate: 5,
      title: "Києво-печерська лавра",
      region: "kyivska",
      author: "Dima Vakhmianin",
      poster: "",
      place: "Іст. пам'ятка",

      placeId: "monument",

      description:
        "Ки́єво-Пече́рська ла́вра — київський православний монастирський комплекс. Один із найбільших християнських центрів України, визначна пам'ятка історії та архітектури. Києво-Печерська лавра належить державі, а релігійні організації користуються нею на правах оренди[2].Заснована 1051 року як печерний монастир за межами Києва. Лавра отримала свою назву від печер, де оселилися її перші мешканці[3].",
      reviews: [],
    },
    {
      id: 2,

      rate: 5,
      title: "Києво-печерська лавра",
      region: "kyivska",
      author: "Dima Vakhmianin",
      poster: "",
      place: "Іст. пам'ятка",
      placeId: "monument",

      description:
        "Ки́єво-Пече́рська ла́вра — київський православний монастирський комплекс. Один із найбільших християнських центрів України, визначна пам'ятка історії та архітектури. Києво-Печерська лавра належить державі, а релігійні організації користуються нею на правах оренди[2].Заснована 1051 року як печерний монастир за межами Києва. Лавра отримала свою назву від печер, де оселилися її перші мешканці[3].",
      reviews: [],
    },
    {
      id: 3,

      rate: 5,
      title: "Києво-печерська лавра",
      region: "kyivska",
      author: "Dima Vakhmianin",
      poster: "",
      place: "Іст. пам'ятка",
      placeId: "monument",

      description:
        "Ки́єво-Пече́рська ла́вра — київський православний монастирський комплекс. Один із найбільших християнських центрів України, визначна пам'ятка історії та архітектури. Києво-Печерська лавра належить державі, а релігійні організації користуються нею на правах оренди[2].Заснована 1051 року як печерний монастир за межами Києва. Лавра отримала свою назву від печер, де оселилися її перші мешканці[3].",
      reviews: [],
    },
    {
      id: 5,

      rate: 2,
      title: "Poltava bum bum ",
      region: "poltavska",
      author: "Dima Vakhmianin",
      poster: "",
      place: "Іст. пам'ятка",
      placeId: "monument",

      description:
        "Ки́єво-Пече́рська ла́вра — київський православний монастирський комплекс. Один із найбільших християнських центрів України, визначна пам'ятка історії та архітектури. Києво-Печерська лавра належить державі, а релігійні організації користуються нею на правах оренди[2].Заснована 1051 року як печерний монастир за межами Києва. Лавра отримала свою назву від печер, де оселилися її перші мешканці[3].",
      reviews: [],
    },
    {
      id: 4,

      rate: 5,
      title: "Києво-печерська лавра",
      region: "kyivska",
      author: "Dima Vakhmianin",
      poster: "",
      place: "Іст. пам'ятка",
      placeId: "monument",

      description:
        "Ки́єво-Пече́рська ла́вра — київський православний монастирський комплекс. Один із найбільших християнських центрів України, визначна пам'ятка історії та архітектури. Києво-Печерська лавра належить державі, а релігійні організації користуються нею на правах оренди[2].Заснована 1051 року як печерний монастир за межами Києва. Лавра отримала свою назву від печер, де оселилися її перші мешканці[3].",
      reviews: [],
    },
  ];

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

  const selectedIds = selectedPlaces.map((p) => p.id);
  const filteredData = locationsData
    .filter(
      (location) =>
        selectedRegion.id === "" || location.region === selectedRegion.id,
    )
    .filter(
      (location) =>
        selectedIds.length === 0 || selectedIds.includes(location.placeId),
    )
    .filter(
      (location) => inputData === "" || location.title.includes(inputData),
    );
  if (selectedSort.id === "") {
  } else if (selectedSort.id === "popular") {
    filteredData.sort((a, b) => b.rate - a.rate);
  }

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
