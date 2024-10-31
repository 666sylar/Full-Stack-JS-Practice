import styles from './Header.module.sass';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1>
        <Link to='/' className={styles.logo}>
          MyApp
        </Link>
      </h1>
      <div className={styles.authorization}>
        {location.pathname === '/signup' ? (
          <Link to='/login' className={styles.link}>
            Log In
          </Link>
        ) : location.pathname === '/login' ? (
          <Link to='/signup' className={styles.link}>
            Sign Up
          </Link>
        ) : (
          <>
            <Link to='/login' className={styles.link}>
              Log In
            </Link>
            <Link to='/signup' className={styles.link}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
