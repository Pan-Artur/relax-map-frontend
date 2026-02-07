import style from "./LocationGallery.module.scss";

export const LocationGallery = ({ location }) => {
  const { gallery } = location;

  return (
    <img src={gallery} alt="Location gallery" className={style.image}></img>
  );
};