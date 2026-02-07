import { FilterPanel } from "../components/FilterPanel";

import {LocationsGrid} from '../components/LocationsGrid'

export const LocationsPage = () => {
  return (
    <>
      <h2>Усі місця відпочинку</h2>
      {/* <FilterPanel /> */}

      <LocationsGrid />
    </>
  );
};
