import { Form, Formik } from 'formik';
import { SIGNUP_VALIDATION_SCHEMA } from '../../../util/validate/validationSchema';
import styles from '../../../page/Authorization/Autorization.module.sass';
import FormField from '../FormField';

const SignUpForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    terms: false,
  };

  const submitHandler = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={SIGNUP_VALIDATION_SCHEMA}
    >
      <Form className={styles.signUpForm}>
        <div className={styles.inputSet}>
          <FormField type='text' name='username' label='Username' />
          <FormField type='email' name='email' label='Email' />
          <FormField type='password' name='password' label='Password' />
          <FormField
            type='password'
            name='confirmPassword'
            label='Confirm Password'
          />
        </div>

        <fieldset>
          <FormField
            type='radio'
            name='role'
            value='buyer'
            label='Join As a Buyer'
            text='I am looking for a Name, Logo or Tagline for my business, brand or product.'
          />
          <FormField
            type='radio'
            name='role'
            value='creative'
            label='Join As a Creative'
            text='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
          />
        </fieldset>

        <FormField
          type='checkbox'
          name='terms'
          label='By clicking this checkbox, you agree to our Terms of Service.'
        />

        <button type='submit' className={styles.submitBtn}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
