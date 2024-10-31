import styles from './Autorization.module.sass';
import SignUpForm from '../../component/form/SignUpForm';

const SignUpPage = () => {
  return (
    <main className={styles.signUp}>
      <SignUpForm />
    </main>
  );
};

export default SignUpPage;
