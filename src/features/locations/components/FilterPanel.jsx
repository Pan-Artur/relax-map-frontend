import styles from "./FilterPanel.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { Container } from "../../../components/Container/Container";

const regions = [
  { id: "", label: "Вся Україна" },
  { id: "kievska", label: "Київська " },
  { id: "zitomirska", label: "Житомирська " },
  { id: "kirovogradska", label: "Кіровоградська " },
  { id: "poltavska", label: "Полтавська " },
  { id: "cherkaska", label: "Черкаська " },
  { id: "volinska", label: "Волинська " },
  { id: "dnipropetrovska", label: "Дніпропетровська " },
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

export const FilterPanel = () => {
  const [regionState, changeRegionState] = useState(false);
  const [placeState, changePlaceState] = useState(false);
  const [sortState, changeSortingState] = useState(false);

  const [selectedRegion, setSelectedRegion] = useState({
    id: "",
    label: "Область",
  });
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedSort, setSelectedSort] = useState({
    id: "",
    label: "Сортування",
  });

  const togglePlace = (place) => {
    const exists = selectedPlaces.find((p) => p.id === place.id);
    if (exists) {
      setSelectedPlaces(selectedPlaces.filter((p) => p.id !== place.id));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  return (
    <section className={styles.filterPanel}>
      <Container>
        <form className={styles.filterPanelForm}>
          <div className={styles.filterPanelBox}>
            <input
              className={styles.filterPanelInput}
              type="text"
              placeholder="Пошук"
            />

            <div className={styles.filterPanelDropdown}>
              <button
                className={styles.filterPanelButton}
                type="button"
                onClick={() => changeRegionState((state) => !state)}
              >
                {selectedRegion.label}
                <span className={styles.filterPanelButtonIcon}>
                  <RiArrowDropDownLine size="24px" />
                </span>
              </button>

              {regionState && (
                <div className={styles.filterPanelRegionsBox}>
                  <ul className={styles.filterPanelRegions}>
                    {regions.map((region) => (
                      <li
                        key={region.id}
                        className={styles.filterPanelRegionsItem}
                      >
                        <label className={styles.filterPanelRegionsLabel}>
                          <input
                            type="radio"
                            className={styles.filterPanelRegionsChecknox}
                            name="region"
                            checked={selectedRegion.id === region.id}
                            onChange={() => setSelectedRegion(region)}
                          />
                          {region.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
              
            <div className={styles.filterPanelDropdown}>
              <button
                className={styles.filterPanelButton}
                type="button"
                onClick={() => changePlaceState((state) => !state)}
              >
                Тип локації
                <span className={styles.filterPanelButtonIcon}>
                  <RiArrowDropDownLine size="24px" />
                </span>
              </button>

              {placeState && (
                <div className={styles.filterPanelRegionsBox}>
                  <ul className={styles.filterPanelRegions}>
                    {places.map((place) => (
                      <li
                        key={place.id}
                        className={styles.filterPanelRegionsItem}
                      >
                        <label className={styles.filterPanelRegionsLabel}>
                          <input
                            type="checkbox"
                            className={styles.filterPanelRegionsChecknox}
                            checked={selectedPlaces.some(
                              (p) => p.id === place.id,
                            )}
                            onChange={() => togglePlace(place)}
                          />
                          {place.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.filterPanelDropdown}>
              <button
                className={styles.filterPanelButton}
                type="button"
                onClick={() => changeSortingState((state) => !state)}
              >
                {selectedSort.label}
                <span className={styles.filterPanelButtonIcon}>
                  <RiArrowDropDownLine size="24px" />
                </span>
              </button>

              {sortState && (
                <div className={styles.filterPanelRegionsBox}>
                  <ul className={styles.filterPanelRegions}>
                    {sortOptions.map((option) => (
                      <li
                        key={option.id}
                        className={styles.filterPanelRegionsItem}
                      >
                        <label className={styles.filterPanelRegionsLabel}>
                          <input
                            type="radio"
                            className={styles.filterPanelRegionsChecknox}
                            name="sort"
                            checked={selectedSort.id === option.id}
                            onChange={() => setSelectedSort(option)}
                          />
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className={styles.filterPanelDropdown}>
            <button
              className={styles.filterPanelButton}
              type="button"
              onClick={() => changeSortingState((state) => !state)}
              id=''
            >
              {selectedSort.label}
              <span className={styles.filterPanelButtonIcon}>
                <RiArrowDropDownLine size="24px" />
              </span>
            </button>

            {sortState && (
              <div className={styles.filterPanelRegionsBox}>
                <ul className={styles.filterPanelRegions}>
                  {sortOptions.map((option) => (
                    <li
                      key={option.id}
                      className={styles.filterPanelRegionsItem}
                    >
                      <label className={styles.filterPanelRegionsLabel}>
                        <input
                          type="radio"
                          className={styles.filterPanelRegionsChecknox}
                          name="sort"
                          checked={selectedSort.id === option.id}
                          onChange={() => setSelectedSort(option)}
                        />
                        {option.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </Container>
    </section>
  );
};
