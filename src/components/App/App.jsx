import { useState } from "react";
import { ClassComponent } from "../ClassComponent/ClassComponent";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const App = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const confirmUserData = (data) => {
    setUser({ ...data });
    setIsOpen(true);
  }

  return (
    <>
    <ClassComponent />
    <RegisterForm onSubmit={confirmUserData} />
    {isOpen && <h2>Hello, {user.username}!</h2>}
    </>
  )
};

