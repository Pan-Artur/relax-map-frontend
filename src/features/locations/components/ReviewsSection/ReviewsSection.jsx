import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { api } from "../../../../app/services/apiClient";
import { selectIsLoggedIn } from "../../../../app/store/authSelectors";

import { Container } from "../../../../components/Container/Container";

import { ModalWrapper } from "../../../../ui/ModalWrapper/ModalWrapper";

import { AuthPromptModal } from "../../modals/AuthPromptModal/AuthPromptModal";

import { ReactComponent as Star } from "../../../../assets/icons/star.svg";
import { ReactComponent as StarHalf } from "../../../../assets/icons/starHalf.svg";
import { ReactComponent as StarFilled } from "../../../../assets/icons/starFilled.svg";

import style from "./ReviewsSection.module.scss";

export const ReviewsSection = ({ locationId }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await api.getReviewsByLocation(locationId);

        setReviews(res.data || []);
        setCurrentIndex(0);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (locationId) {
      fetchReviews();
    }
  }, [locationId]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handleAddReviewClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }

    navigate(`/locations/${locationId}/add-review`, {
      state: { background: location },
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <li key={index} className={style.star}>
        {index + 1 <= rating ? (
          <StarFilled />
        ) : index + 0.5 <= rating ? (
          <StarHalf />
        ) : (
          <Star />
        )}
      </li>
    ));
  };

  const maxVisible = 3;
  const visibleReviews =
    reviews.length <= maxVisible
      ? reviews
      : [
          reviews[currentIndex % reviews.length],
          reviews[(currentIndex + 1) % reviews.length],
          reviews[(currentIndex + 2) % reviews.length],
        ];

  return (
    <section className={style.section}>
      <Container>
        <div className={style.header}>
          <h2 className={style.title}>Відгуки</h2>
          <button
            type="button"
            className={style.button}
            onClick={handleAddReviewClick}
          >
            Залишити відгук
          </button>
        </div>

        <ul className={style.list}>
          {reviews.length === 0 ? (
            <li className={style.nothing}>Відгуків поки немає</li>
          ) : (
            visibleReviews.map((review, idx) => {
              const rating = parseFloat(review.rating);

              return (
                <li key={idx} className={style.item}>
                  <ul className={style.rating}>{renderStars(rating)}</ul>
                  <p className={style.text}>{review.comment}</p>
                  <div className={style.info}>
                    <p className={style.author}>{review.authorname}</p>
                    <p className={style.location}>{review.locationname}</p>
                  </div>
                </li>
              );
            })
          )}
        </ul>

        {reviews.length > maxVisible && (
          <ul className={style.couple}>
            <li className={style.element}>
              <button type="button" className={style.prev} onClick={handlePrev}>
                <img
                  src="https://image2url.com/r2/default/images/1769949318051-2ac4694b-8a69-4bef-a9fc-cbd89d568586.png"
                  alt="arrow-left"
                />
              </button>
            </li>

            <li className={style.element}>
              <button type="button" className={style.next} onClick={handleNext}>
                <img
                  src="https://image2url.com/r2/default/images/1769949404539-8e425d1e-d30b-4aaa-88d5-02f311c752c4.png"
                  alt="arrow-right"
                />
              </button>
            </li>
          </ul>
        )}
      </Container>
      {showAuthModal && (
        <ModalWrapper onClose={() => setShowAuthModal(false)}>
          <AuthPromptModal onClose={() => setShowAuthModal(false)} />
        </ModalWrapper>
      )}
    </section>
  );
};
