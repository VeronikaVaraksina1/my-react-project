import { useState } from "react";
import { ClassComponent } from "../ClassComponent/ClassComponent";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import SearchBox from "../SearchBox/SearchBox";
import { FormikForm } from "../FormikForm/FormikForm";

export const App = () => {
  // RegisterForm
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const confirmUserData = (data) => {
    setUser({ ...data });
    setIsOpen(true);
  }

  // SearchBox
  const [text, setInputText] = useState("");

  // FormikForm
  const [formikData, setFormikData] = useState(null);
  return (
    <>
    <ClassComponent />

    <RegisterForm onSubmit={confirmUserData} />
    {isOpen && <h2>Hello, {user.username}!</h2>}

    <SearchBox valueInput={text} onSetInputText={setInputText} />
    <p>{text}</p>

    <FormikForm setFormikData={setFormikData} />
    {formikData ? <p>Welcome to Contact Kingdom, {formikData.username}!</p> : null}
    </>
  )
};

