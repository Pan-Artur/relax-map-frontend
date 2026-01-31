export const FilterPanel = () => {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="Пошук" />
        <button>Область</button>
        <ul>
          <li>
            <label>
              <input type="radio" name="region" id="all" />
              Вся Україна
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="kievska" />
              Київська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="zitomirska" />
              Житомирська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="kirovogradska" />
              Кіровоградська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="poltavska" />
              Полтавська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="cherkaska" />
              Черкаська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="volinska" />
              Волинська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="dnipropetrovska" />
              Дніпропетровська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="donetska" />
              Донецька область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="zakarpatska" />
              Закарпатська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="zaporizka" />
              Запорізька область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="ivanoFrankivska" />
              Івано-Франківська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="luganska" />
              Луганська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="lvivska" />
              Львівська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="mikolaivska" />
              Миколаївська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="odeska" />
              Одеська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="rivenska" />
              Рівненська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="ternopilska" />
              Тернопільська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="kharkivska" />
              Харківська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="hmelnicka" />
              Хмельницька область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="chernivecka" />
              Чернівецька область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="chernigivska" />
              Чернігівська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="hersonska" />
              Херсонська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="sumska" />
              Сумська область
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="krim" />
              АР Крим
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="region" id="vinnicka" />
              Вінницька область
            </label>
          </li>
        </ul>

        <button type="button">Тип локації</button>
        <ul>
          <li>
            <label>
              <input type="checkbox" name="Пляж" id="beach" />
              Пляж
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="place" id="camping" />
              Кемпінг
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="place" id="park" />
              Парк
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" name="place" id="monument" />
              Іст. пам'ятка
            </label>
          </li>
        </ul>
        <button type="button">Сортування</button>
        <ul>
          <li>
            <label>
              <input type="radio" name="filter" id="popular" />
              За популярністю
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="filter" id="highRated" />
              За рейтингом
            </label>
          </li>
          <li>
            <label>
              <input type="radio" name="filter" id="new" />
              Новіші спочатку
            </label>
          </li>
        </ul>
      </form>
    </section>
  );
};
