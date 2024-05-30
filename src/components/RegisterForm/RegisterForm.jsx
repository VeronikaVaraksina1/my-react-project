import { useState } from "react";
import { AppInput } from "../AppInput/AppInput";

export const RegisterForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({ username: "", email: "", password: "" });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value.trim(),
    });  
  }

  const handleSubmit = () => {
    event.preventDefault();

    onSubmit(userData); // передаємо зібрані дані в App

    event.target.reset();
  }


  return (
    <>
      <h1>Please, register</h1>
      <form onSubmit={handleSubmit}>
        <AppInput label="Username" name="username" type= "text" required={true} value={userData.username} onChange={handleChange} />
        <AppInput label="Email" name="email" type= "email" required={true} value={userData.email} onChange={handleChange} />
        <AppInput label="Password" name="password" type= "password" required={true} value={userData.password} onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
