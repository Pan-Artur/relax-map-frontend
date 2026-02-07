import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as StarHalf } from "../../../../assets/icons/starHalf.svg";
import { ReactComponent as StarFilled } from "../../../../assets/icons/starFilled.svg";

import style from "./LocationInfoBlock.module.scss";

export const LocationInfoBlock = ({ location }) => {

  return (
    <>
      <div classname={style.rate}>
        <div className={style.stars}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className={style.dote}></div>
        <p className={style.number}>4.5</p>
      </div>
      <h2 className={style.title}>Бакотська затока</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <h3 className={style.subtitle}>Регіон:</h3>
          <h3 className={style.content}>Хмельниччина</h3>
        </li>
        <li className={style.item}>
          <h3 className={style.subtitle}>Тип локації:</h3>
          <h3 className={style.content}>Пляж</h3>
        </li>
        <li className={style.item}>
          <h3 className={style.subtitle}>Автор статті:</h3>
          <h3 className={style.content}>Анастасія Олійник</h3>
        </li>
      </ul>
    </>
  );
};
