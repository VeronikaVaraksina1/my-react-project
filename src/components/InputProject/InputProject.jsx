import css from "./InputProject.module.css"
import { useId } from "react";

export const InputProject = ({ type, name, placeholder }) => {
  const inputId = useId();

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId} aria-label={placeholder}>
        <input className={css.input} type={type} name={name} id={inputId} placeholder={placeholder} />
      </label>
    </div>
  )
};
