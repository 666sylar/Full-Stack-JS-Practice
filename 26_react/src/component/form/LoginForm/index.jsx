import { Form, Formik } from 'formik';
import { LOGIN_VALIDATION_SCHEMA } from '../../../util/validate/validationSchema';
import styles from '../../../page/Authorization/Autorization.module.sass';
import FormField from '../FormField';

const LoginForm = () => {
  const initialValues = { email: '', password: '' };
  const submitHandler = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      <Form className={styles.logInForm}>
        <div className={styles.inputSet}>
          <FormField type='email' name='email' label='Email' />
          <FormField type='password' name='password' label='Password' />
        </div>

        <button type='submit' className={styles.submitBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
