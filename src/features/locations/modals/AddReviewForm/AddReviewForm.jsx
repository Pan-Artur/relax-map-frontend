import { useState } from "react";
import { useSelector } from "react-redux";

import { api } from "../../../../app/services/apiClient";
import { selectIsLoggedIn } from "../../../../app/store/authSelectors";

import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as StarHalf } from "../../../../assets/icons/starHalf.svg";
import { ReactComponent as StarFilled } from "../../../../assets/icons/starFilled.svg";

import { useToast } from "../../../../components/ToastProvider/ToastProvider";
import { ModalWrapper } from "../../../../ui/ModalWrapper/ModalWrapper";

import { AuthPromptModal } from "../AuthPromptModal/AuthPromptModal";

import style from "./AddReviewForm.module.scss";

export const AddReviewForm = ({ locationId, onSuccess }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { showToast } = useToast();

  const validate = () => {
    const newErrors = {};

    if (rating < 1) newErrors.rating = "Оберіть рейтинг";

    if (!comment.trim()) {
      newErrors.comment = "Обов'язкове поле";
    } else if (comment.trim().length < 10) {
      newErrors.comment = "Мінімум 10 символів";
    } else if (comment.length > 100) {
      newErrors.comment = "Максимум 100 символів";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }

    if (!validate()) return;

    try {
      setLoading(true);

      const response = await api.addReview(locationId, {
        rating,
        text: comment,
      });

      showToast("Відгук успішно створено:");

      onSuccess();
    } catch (error) {
      console.error(error);

      showToast("Помилка при відправці");
    } finally {
      setLoading(false);
    }
  };

  const handleStarClick = (index) => {
    const starNumber = index + 1;
    const halfValue = starNumber - 0.5;

    if (rating < halfValue) setRating(halfValue);
    else if (rating === halfValue) setRating(starNumber);
    else setRating(0);

    setErrors((prev) => ({ ...prev, rating: null }));
  };

  const renderStars = () =>
    [...Array(5)].map((_, index) => {
      const starNumber = index + 1;
      const halfValue = starNumber - 0.5;
      let icon;

      if (rating >= starNumber) icon = <StarFilled width={32} height={32} />;
      else if (rating >= halfValue) icon = <StarHalf width={32} height={32} />;
      else icon = <Star width={32} height={32} />;

      return (
        <button
          key={index}
          type="button"
          className={style.starButton}
          onClick={() => handleStarClick(index)}
        >
          {icon}
        </button>
      );
    });

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.field}>
          <h3 className={style.subtitle}>Ваш відгук</h3>
          <textarea
            placeholder="Напишіть ваш відгук"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setErrors((prev) => ({ ...prev, comment: null }));
            }}
            // maxLength={100}
            className={`${style.textarea} ${errors.comment ? style.textareaError : ""}`}
          />

          <div className={style.warning}>
            {errors.comment && (
              <p
                className={`${style.error} ${errors.comment ? style.show : ""}`}
              >
                {errors.comment || " "}
              </p>
            )}

            <p className={style.counter}>{comment.length}/100</p>
          </div>
        </div>

        <div className={style.field}>
          <div className={style.stars}>{renderStars()}</div>
          {errors.rating && (
            <p className={`${style.error} ${errors.rating ? style.show : ""}`}>
              {errors.rating || " "}
            </p>
          )}
        </div>

        <div className={style.actions}>
          <button type="button" onClick={onSuccess} className={style.cancel}>
            Відмінити
          </button>
          <button type="submit" disabled={loading} className={style.submit}>
            {loading ? "Відправка..." : "Надіслати"}
          </button>
        </div>
      </form>

      {showAuthModal && (
        <ModalWrapper onClose={() => setShowAuthModal(false)}>
          <AuthPromptModal onClose={() => setShowAuthModal(false)} />
        </ModalWrapper>
      )}
    </>
  );
};
