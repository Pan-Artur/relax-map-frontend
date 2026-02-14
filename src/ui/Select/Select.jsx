import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import style from "./Select.module.scss";

export const Select = ({ placeholder, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={style.wrapper} ref={wrapperRef}>
      <button
        type="button"
        className={`${style.input} ${open ? style.open : ""}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? style.value : style.placeholder}>
          {value || placeholder}
        </span>

        <IoIosArrowDown className={style.arrow} />
      </button>

      {open && (
        <ul className={style.dropdown}>
          {options.map((option) => (
            <li
              key={option}
              className={style.option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
