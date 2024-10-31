import styles from './Autorization.module.sass';
import LoginForm from '../../component/form/LoginForm';

const LoginPage = () => {
  return (
    <main className={styles.logIn}>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
