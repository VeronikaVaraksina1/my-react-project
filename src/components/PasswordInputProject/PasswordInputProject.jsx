import css from "./PasswordInputProject.module.css"
import { useId, useRef } from "react";

export const PasswordInputProject = ({ placeholder }) => {
  const passwordInputId = useId();
  const inputRef = useRef();
  const btnRef = useRef();

  const showOrHidePassword = () => {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text";
      btnRef.current.textContent = "🙈";
      btnRef.current.ariaLabel = "Hide the entered password";
      return;
    }
      
    inputRef.current.type = "password";
    btnRef.current.textContent = "👀";
    btnRef.current.ariaLabel = "Show the entered password";
  }

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor={passwordInputId} aria-label="Enter the password">
        <input className={css.input} ref={inputRef} type="password" name="password" id={passwordInputId} placeholder={placeholder} />
      </label>
    <button className={css.button} onClick={showOrHidePassword} ref={btnRef} type="button" aria-label="Show the entered password">👀</button>
    </div>  
  );
};