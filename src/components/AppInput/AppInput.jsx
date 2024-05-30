import { useId } from 'react';
import css from './AppInput.module.css';

export const AppInput = ({ label, name, ...rest }) => {
  const inputId = useId(); // хук, призначений лише для генерації id та htmlFor в формі

  return (
    <label htmlFor={inputId}>
      {label}
      <input className={css.input} name={name} id={inputId} {...rest} />
    </label>
  );
};
