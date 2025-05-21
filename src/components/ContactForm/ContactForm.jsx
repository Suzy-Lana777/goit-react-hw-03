import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, actions) => {
        const newContact = {
          id: Date.now(),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name:
          <Field name="name" type="text" />
        </label>
        <br />
        <label>
          Number:
          <Field name="number" type="text" />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
