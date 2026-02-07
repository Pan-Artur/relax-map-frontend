import { useState, useRef } from "react";
import { api } from "../../../../app/services/apiClient";
import { Select } from "../../../../ui/Select/Select";

import style from "./LocationForm.module.css";

export const LocationForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [region, setRegion] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const placeTypes = ["Пляж", "Кемпінг", "Парк", "Іст. памʼятка"];
  const regions = [
    "Київська область",
    "Житомирська область",
    "Кіровоградська область",
    "Полтавська область",
    "Черкаська область",
    "Волинська область",
    "Дніпропетровська область",
    "Донецька область",
    "Закарпатська область",
    "Запорізька область",
    "Івано-Франківська область",
    "Луганська область",
    "Львівська область",
    "Миколаївська область",
    "Одеська область",
    "Рівненська область",
    "Тернопільська область",
    "Харківська область",
    "Хмельницька область",
    "Чернівецька область",
    "Чернігівська область",
    "Херсонська область",
    "Сумська область",
    "АР Крим",
    "Вінницька область",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !type || !region || !imageFile) {
      alert("Заповніть усі поля");
      return;
    }

    try {
      const uploadRes = await api.uploadImage(imageFile);
      const posterUrl = uploadRes.data.url;

      await api.createLocation({
        title,
        description,
        region,
        place: type,
        poster: posterUrl,
      });

      alert("Локацію успішно створено");
      onSuccess?.();
    } catch (err) {
      console.error(err.message);
      alert("Помилка при створенні локації");
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setType("");
    setRegion("");
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={style.title}>Додавання нового місця</h2>

      <div className={style.gallery}>
        <h3 className={style.subtitle}>Обкладинка статті</h3>
        <div className={style.field}>
          <img
            src={
              imagePreview ||
              "https://image2url.com/r2/default/images/1770306879097-39f68f5d-42b3-4136-bdc9-39ce5c3a49e9.png"
            }
            alt="Preview"
            className={style.fieldImage}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            hidden
            onChange={handleFileChange}
          />
        </div>
        <button
          type="button"
          className={style.fieldButton}
          onClick={() => fileInputRef.current.click()}
        >
          Завантажити фото
        </button>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <h3 className={style.subtitle}>Назва місця</h3>
          <input
            type="text"
            placeholder="Введіть назву місця"
            className={style.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>

        <li className={style.item}>
          <h3 className={style.subtitle}>Тип місця</h3>
          <Select
            placeholder="Оберіть тип місця"
            options={placeTypes}
            value={type}
            onChange={setType}
          />
        </li>

        <li className={style.item}>
          <h3 className={style.subtitle}>Регіон</h3>
          <Select
            placeholder="Оберіть регіон"
            options={regions}
            value={region}
            onChange={setRegion}
          />
        </li>

        <li className={style.item}>
          <h3 className={style.subtitle}>Детальний опис</h3>
          <textarea
            className={style.details}
            placeholder="Детальний опис локації"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </li>
      </ul>

      <div className={style.couple}>
        <button type="submit" className={style.submitButton}>
          Зберегти
        </button>
        <button
          type="button"
          className={style.cancelButton}
          onClick={handleCancel}
        >
          Відмінити
        </button>
      </div>
    </form>
  );
};
