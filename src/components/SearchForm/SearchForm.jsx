import { Field, Form, Formik } from 'formik';
import { useId } from 'react';

export default function SearchForm({ onSearch }) {
  const searchId = useId();

  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor={searchId}>Search articles</label>
        <Field type="text" name="query" id={searchId} />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
