import { FilterPanel } from "../components/FilterPanel";
import styles from '../components/FilterPanel.module.scss'

import {LocationsGrid} from '../components/LocationsGrid'

export const LocationsPage = () => {
  return (
    <>
      <h2 className={styles.title}>Усі місця відпочинку</h2>
      <FilterPanel />

      <LocationsGrid />
    </>
  );
};
