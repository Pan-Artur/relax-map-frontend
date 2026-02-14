import { LocationsCard } from "./LocationsCard";
import styles from './LocationsGrid.module.scss'
import {Container} from '../../../components/Container/Container'


export const LocationsGrid = ({locationsData}) => {  
 
  return(
    <Container>
      <ul className={styles.locationsGrid}>
      {locationsData.map((location) => (
        <li className={styles.locationsGridCard} key={location.id}><LocationsCard place={location.place} img={location.poster} rating={location.rate} title={location.title} /></li>
        
      ))}
    </ul>
    </Container>
    
  )
};
