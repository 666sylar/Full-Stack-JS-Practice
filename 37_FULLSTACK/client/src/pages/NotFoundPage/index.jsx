import styles from './NotFoundPage.module.sass';

const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </main>
  );
};

export default NotFoundPage;
