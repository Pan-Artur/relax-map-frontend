import styles from "./FilterPanel.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { Container } from "../../../components/Container/Container";

export const FilterPanel = ({
  regions,
  places,
  sortOptions,
  selectedRegion,
  setSelectedRegion,
  selectedPlaces,
  setSelectedPlaces,
  selectedSort,
  setSelectedSort,
  togglePlace,
  inputData,
  setInputData
}) => {
  const [regionState, changeRegionState] = useState(false);
  const [placeState, changePlaceState] = useState(false);
  const [sortState, changeSortingState] = useState(false);

  const sortChange = (option) => {

    changeSortingState((state) => !state)
    setSelectedSort(option)
  }
  return (
    <section className={styles.filterPanel}>
      <Container>
        <form className={styles.filterPanelForm}>
          <div className={styles.filterPanelBox}>
            <input
              className={styles.filterPanelInput}
              type="text"
              placeholder="Пошук"
              name="filterInput"
              onChange={(e) => setInputData(e.target.value)}
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
              id=""
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
                          onChange={() => sortChange(option)}
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
