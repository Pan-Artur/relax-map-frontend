export const FilterPanel = () => {
  return (
    <section>
      <form action="">
        <input type="text" placeholder="Пошук" />
        <button>Регіон</button>
        <ul>
          <li>
            <input type="radio" name="Київська область" id="kievska" />
          </li>
          <li>
            <input type="radio" name="Житомирська область" id="zitomirska" />
          </li>
          <li>
            <input
              type="radio"
              name="Кіровоградська область"
              id="kirovogradska"
            />
          </li>
          <li>
            <input type="radio" name="Полтавська область" id="poltavska" />
          </li>
          <li>
            <input type="radio" name="Черкаська область" id="cherkaska" />
          </li>
          <li>
            
            <input type="radio" name="Волиньська область" id="volinska" />
          </li>
          <li>
            
            <input
              type="radio"
              name="Дніпропетровська область"
              id="dnipropetrovska"
            />
          </li>
          <li>
            <input type="radio" name="Донецька область" id="donetska" />
          </li>
          <li>
           
            <input type="radio" name="Закарпатьска область" id="luganska" />
          </li>
          <li>
           
            <input type="radio" name="Запорізька область" id="zaporizka" />
          </li>
          <li>
            <input
              type="radio"
              name="Івано-Франківська область"
              id="ivanoFrankivska"
            />
          </li>
          <li>
            <input type="radio" name="Луганьска область" id="luganska" />
          </li>
          <li>
            <input type="radio" name="Львівська область" id="lvivska" />
          </li>
          <li>
            <input type="radio" name="Миколаївська область" id="mikolaivska" />
          </li>
          <li>
            <input type="radio" name="Одеська область" id="odeska" />
          </li>
          <li>
            <input type="radio" name="Рівеньска область" id="rivenska" />
          </li>
          <li>
            <input type="radio" name="Тернопільска область" id="ternopilska" />
          </li>
          <li>
           
            <input type="radio" name="Харківська область" id="kharkivska" />
          </li>
          <li>
            <input type="radio" name="Хмельницька область" id="hmelnicka" />
          </li>
          <li>
            <input type="radio" name="Чернівецька область" id="chernivecka" />
          </li>
          <li>
            <input type="radio" name="Чернігівська область" id="chernigivska" />
          </li>
          <li>
            <input type="radio" name="Херсонська область" id="hersonska" />
          </li>
          <li>
            <input type="radio" name="Сумська область" id="sumska" />
          </li>
          <li>
            
            <input type="radio" name="АР Крим" id="krim" />
          </li>
          <li>
            <input type="radio" name="Вінницька область" id="vinnicka" />
          </li>
        </ul>
        <button type="button">Тип локації</button>
        <ul>
            <li><input type="checkbox" name="Пляж" id="beach" /></li>
            <li><input type="checkbox" name="Кемпінг" id="camping" /></li>
            <li><input type="checkbox" name="Парк" id="park" /></li>
            <li><input type="checkbox" name="Іст. пам'ятка" id="monument" /></li>
        </ul>
        <button type="button">Сортування</button>
        <ul>
            <li><input type="checkbox" name="За популярністю" id="popular" /></li>
            <li><input type="checkbox" name="За рейтингом" id="highRated" /></li>
            <li><input type="checkbox" name="Новіші спочатку" id="new" /></li>
        </ul>
      </form>
    </section>
  );
};
