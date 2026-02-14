import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as StarHalf } from "../../../../assets/icons/starHalf.svg";
import { ReactComponent as StarFilled } from "../../../../assets/icons/starFilled.svg";

import style from "./LocationInfoBlock.module.scss";

export const LocationInfoBlock = ({ location }) => {
  const { title, rate, region, place, author_name } = location;

  const fullStars = Math.floor(rate);
  const hasHalf = rate % 1 >= 0.5;

  return (
    <div className={style.info}>
      <div className={style.rate}>
        <div className={style.stars}>
          {[...Array(5)].map((_, i) => {
            if (i < fullStars)
              return <StarFilled key={i} width={32} height={32} />;
            if (i === fullStars && hasHalf)
              return <StarHalf key={i} width={32} height={32} />;
            return <Star key={i} width={32} height={32} />;
          })}
        </div>
        <div className={style.dote}></div>
        <p className={style.number}>
          {rate > 0 ? Math.round(rate * 10) / 10 : "Не оцінено"}
        </p>
      </div>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.list}>
        <li className={style.item}>
          <h3 className={style.subtitle}>Регіон:</h3>
          <h3 className={style.content}>{region || "..."}</h3>
        </li>
        <li className={style.item}>
          <h3 className={style.subtitle}>Тип локації:</h3>
          <h3 className={style.content}>{place || "..."}</h3>
        </li>
        <li className={style.item}>
          <h3 className={style.subtitle}>Автор статті:</h3>
          <h3 className={style.content}>{author_name || "..."}</h3>
        </li>
      </ul>
    </div>
  );
};
