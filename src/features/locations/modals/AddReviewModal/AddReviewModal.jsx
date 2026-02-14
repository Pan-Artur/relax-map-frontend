import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AddReviewForm } from "../AddReviewForm/AddReviewForm";

import { IoIosClose } from "react-icons/io";

import style from "./AddReviewModal.module.scss";

export const AddReviewModal = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClose = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <div
        className={style.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={style.close}
          onClick={handleClose}
        >
          <IoIosClose size="34px" />
        </button>
        <h2 className={style.title}>Залишити відгук</h2>
        <AddReviewForm
          locationId={id}
          onSuccess={handleClose}
        />
      </div>
    </div>
  );
};
