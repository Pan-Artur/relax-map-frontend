import style from "./LocationGallery.module.scss";

export const LocationGallery = ({ gallery, poster }) => {
  const image =
    Array.isArray(gallery) && gallery.length > 0
      ? gallery[0]
      : poster || "https://image2url.com/r2/default/images/1770306879097-39f68f5d-42b3-4136-bdc9-39ce5c3a49e9.png";

  return (
    <img
      src={`http://localhost:4000${image}`}
      alt="Location gallery"
      className={style.image}
    />
  );
};
