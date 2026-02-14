import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

import style from "./AuthPromptModal.module.scss";

export const AuthPromptModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleLogin = () => navigate("/auth/login");
  const handleRegister = () => navigate("/auth/register");

  return (
    <div className={style.backdrop} onClick={handleClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>
        <button className={style.close} onClick={handleClose}>
          <IoIosClose size={30} />
        </button>
        <h2 className={style.title}>Помилка під час додавання відгуку</h2>
        <p className={style.text}>
          Щоб залишити відгук, вам треба увійти. Якщо ще немає облікового запису — зареєструйтесь.
        </p>
        <div className={style.actions}>
          <button className={style.login} onClick={handleLogin}>
            Увійти
          </button>
          <button className={style.register} onClick={handleRegister}>
            Зареєструватися
          </button>
        </div>
      </div>
    </div>
  );
};
