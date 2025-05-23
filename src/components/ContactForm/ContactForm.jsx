import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema} // ← ❗️ правильна назва
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
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
          <ErrorMessage name="name" component="div" />
        </label>
        <br />
        <label>
          Number:
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
