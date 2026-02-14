import { useState, useRef } from "react";

import { api } from "../../../../app/services/apiClient";

import { Select } from "../../../../ui/Select/Select";
import { useToast } from "../../../../components/ToastProvider/ToastProvider";

import style from "./LocationForm.module.scss";

export const LocationForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [region, setRegion] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const { showToast, isToastVisible } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  const placeTypes = ["Пляж", "Кемпінг", "Парк", "Іст. памʼятка"];
  const regions = [
    "АР Крим",
    "Вінницька область",
    "Волинська область",
    "Дніпропетровська область",
    "Донецька область",
    "Житомирська область",
    "Закарпатська область",
    "Запорізька область",
    "Івано-Франківська область",
    "Київська область",
    "Кіровоградська область",
    "Луганська область",
    "Львівська область",
    "Миколаївська область",
    "Одеська область",
    "Полтавська область",
    "Рівненська область",
    "Сумська область",
    "Тернопільська область",
    "Харківська область",
    "Херсонська область",
    "Хмельницька область",
    "Черкаська область",
    "Чернівецька область",
    "Чернігівська область",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!title || !description || !type || !region || !imageFile) {
      showToast("Заповніть усі поля");
      return;
    }

    if (title.length < 5) {
      showToast("Назва має містити щонайменше 5 символів");
      return;
    }

    if (description.length < 20) {
      showToast("Опис має містити щонайменше 20 символів");
      return;
    }

    try {
      setIsSubmitting(true);
      const uploadRes = await api.uploadImage(imageFile);
      const posterUrl = uploadRes.data.url;

      await api.createLocation({
        title,
        description,
        region,
        place: type,
        poster: posterUrl,
      });

      showToast("Локацію успішно створено");

      onSuccess?.();
    } catch (err) {
      console.error(err.message);

      showToast("Помилка при створенні локації");
    } finally {
      setIsSubmitting(false);
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
        <button
          type="submit"
          className={style.submitButton}
          disabled={isSubmitting || isToastVisible}
        >
          Зберегти
        </button>
        <button
          type="button"
          className={style.cancelButton}
          onClick={handleCancel}
          disabled={isToastVisible}
        >
          Відмінити
        </button>
      </div>
    </form>
  );
};
