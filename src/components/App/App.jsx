import { useContext, useEffect, useState } from "react";
import { ClassComponent } from "../ClassComponent/ClassComponent";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import SearchBox from "../SearchBox/SearchBox";
import { FormikForm } from "../FormikForm/FormikForm";
import { ModalInterval } from "../ModalInterval/ModalInterval";
import { ArticlesList } from "../ArticlesList/ArticlesList";
import axios from "axios";
import { UserContext } from "../../context";
import { ProjectButton } from "../ProjectButton/ProjectButton";
import { PasswordInputProject } from "../PasswordInputProject/PasswordInputProject";
import { InputProject } from "../InputProject/InputProject";

export const App = () => {

  // Http request
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://hn.algolia.com/api/v1/search?query=react");
        setArticles(response.data.hits);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

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

  // ButtonInterval
  const [isOpenInterval, setIsOpenInterval] = useState(false);

  // useContext, а також імпортуємо створений контекст в main.jsx і передаємо його як аргумент для useContext
  const { name } = useContext(UserContext);

  return (
    <>
      <InputProject type={"text"} name={"name"} placeholder={"Enter your name"} />
      <InputProject type={"email"} name={"email"} placeholder={"Enter your email"} />
      <hr />

      <PasswordInputProject placeholder={"qwe"} />
      <hr />

      <ProjectButton>Log In Now</ProjectButton>
      <ProjectButton>Register Now</ProjectButton>
      <hr />

      {articles ? <ArticlesList articles={articles} /> : "Error"}
      <hr />

      <h2>Classic component</h2>
      <p>Click to hide:</p>
      <ClassComponent />
      <hr />

      <h2>React Form</h2>
      <RegisterForm onSubmit={confirmUserData} />
      {isOpen && <h2>Hello, {user.username}!</h2>}
      <hr />

      <h2>Search field: Control element</h2>
      <SearchBox valueInput={text} onSetInputText={setInputText} />
      <p>{text}</p>
      <hr />

      <h2>Formik</h2>
      <FormikForm setFormikData={setFormikData} />
      {formikData ? <p>Welcome to Contact Kingdom, {formikData.username}!</p> : null}
      <hr />

      <h2>useEffect & clear function</h2>
      <button onClick={() => setIsOpenInterval(!isOpenInterval)}>{isOpenInterval ? "Close" : "Open"}</button>
      {isOpenInterval ? <ModalInterval /> : null}
      <hr />

      <h2>useContext</h2>
      <p>Name: {name}</p>
    </>
  )
};

