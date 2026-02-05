import styles from './FilterPanel.module.scss'
import {ReactComponent as arrow} from '../../../assets/icons/arrow.svg'

export const FilterPanel = () => {
  return (
    <section className={styles.filterPanel}>
      <form className={styles.filterPanelForm}>
        <input className={styles.filterPanelInput} type="text"  placeholder="Пошук" />
        <button className={styles.filterPanelRegionsButton} type="button">Область <img className='filterPanelIcon' src={arrow} alt="" /></button>
        {/* className={styles.filterPanelRegions} */}
        <ul className={styles.isHidden}>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="all" />
              Вся Україна
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="kievska" />
              Київська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="zitomirska" />
              Житомирська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="kirovogradska" />
              Кіровоградська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="poltavska" />
              Полтавська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="cherkaska" />
              Черкаська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="volinska" />
              Волинська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="dnipropetrovska" />
              Дніпропетровська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="donetska" />
              Донецька область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="zakarpatska" />
              Закарпатська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="zaporizka" />
              Запорізька область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="ivanoFrankivska" />
              Івано-Франківська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="luganska" />
              Луганська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="lvivska" />
              Львівська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="mikolaivska" />
              Миколаївська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="odeska" />
              Одеська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="rivenska" />
              Рівненська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="ternopilska" />
              Тернопільська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="kharkivska" />
              Харківська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="hmelnicka" />
              Хмельницька область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="chernivecka" />
              Чернівецька область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="chernigivska" />
              Чернігівська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="hersonska" />
              Херсонська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="sumska" />
              Сумська область
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="krim" />
              АР Крим
            </label>
          </li>
          <li className={styles.filterPanelRegionsItem}>
            <label>
              <input type="radio" name="region" id="vinnicka" />
              Вінницька область
            </label>
          </li>
        </ul>

        <button className={styles.filterPanelPlacesButton} type="button">Тип локації</button>
        {/* className={styles.filterPanelPlaces} */}
        <ul className={styles.isHidden}>
          <li className={styles.filterPanelPlacesItem}>
            <label>
              <input type="checkbox" name="Пляж" id="beach" />
              Пляж
            </label>
          </li>
          <li className={styles.filterPanelPlacesItem}>
            <label>
              <input type="checkbox" name="place" id="camping" />
              Кемпінг
            </label>
          </li>
          <li className={styles.filterPanelPlacesItem}>
            <label>
              <input type="checkbox" name="place" id="park" />
              Парк
            </label>
          </li>
          <li className={styles.filterPanelPlacesItem}>
            <label>
              <input type="checkbox" name="place" id="monument" />
              Іст. пам'ятка
            </label>
          </li>
        </ul>
        <button className={styles.filterPanelSortButton} type="button">Сортування</button>
        {/* styles.filterPanelSort */}
        <ul className={styles.isHidden}>
          <li className={styles.filterPanelSortItem}>
            <label>
              <input type="radio" name="filterPanel" id="popular" />
              За популярністю
            </label>
          </li>
          <li className={styles.filterSortItem}>
            <label>
              <input type="radio" name="filterPanel" id="highRated" />
              За рейтингом
            </label>
          </li>
          <li className={styles.filterSortItem}>
            <label>
              <input type="radio" name="filterPanel" id="new" />
              Новіші спочатку
            </label>
          </li>
        </ul>
      </form>
    </section>
  );
};
