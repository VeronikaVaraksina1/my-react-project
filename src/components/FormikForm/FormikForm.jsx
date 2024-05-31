import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

export const FormikForm = ({ setFormikData }) => {
  const usernameId = useId();
  const emailId = useId();

  return (
    <>
    <h2>Formik</h2>
      <Formik initialValues={{ username: "", email: "" }} onSubmit={(values, actions) => {
        console.log(values);
        setFormikData(values);
        actions.resetForm();
      }}>
        <Form>
          <div>
            <label htmlFor={usernameId}>Username</label>
            <Field type="text" name="username" id={usernameId} />
          </div>

          <div>
            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" id={emailId} />
          </div>

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </>
  );
};

// initialValues - початкове значення стану
// onSubmit - функція, яка викликатиметься при сабміті форми
// - values: значення полів при сабміті
// - actions: набір методів, вбудованих у форму