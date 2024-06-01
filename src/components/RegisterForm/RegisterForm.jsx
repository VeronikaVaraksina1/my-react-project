import { useState } from "react";
import { AppInput } from "../AppInput/AppInput";

export const RegisterForm = ({ onSubmit }) => {
  const initialValues = { username: "", email: "", password: "" }
  const [userData, setUserData] = useState(initialValues);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value.trim(),
    });  
  }

  const handleSubmit = () => {
    event.preventDefault(); // блокуємо дефолтну поведінку браузера

    onSubmit(userData); // передаємо зібрані дані в App

    setUserData(initialValues) // скидаємо стан до початкових значень
    event.target.reset(); // очищаємо поля форми
  }


  return (
    <>
      <h4>Please, register</h4>
      <form onSubmit={handleSubmit}>
        <AppInput label="Username" name="username" type= "text" required={true} value={userData.username} onChange={handleChange} />
        <AppInput label="Email" name="email" type= "email" required={true} value={userData.email} onChange={handleChange} />
        <AppInput label="Password" name="password" type= "password" required={true} value={userData.password} onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
