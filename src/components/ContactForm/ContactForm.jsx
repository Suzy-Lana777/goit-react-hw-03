import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAdd({
          id: nanoid(),
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      }}
    >
      <Form className={`${css.formWrapper} ${css.form}`}>
        <label className={css.label}>
          Name:
          <Field name="name" type="text" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Number:
          <Field name="number" type="text" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
