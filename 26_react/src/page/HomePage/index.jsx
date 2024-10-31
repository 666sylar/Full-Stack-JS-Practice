import styles from './HomePage.module.sass';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <h2>Welcome to MyApp!</h2>
      <p>This is the home page. Please log in or sign up to continue.</p>
    </main>
  );
};

export default HomePage;
