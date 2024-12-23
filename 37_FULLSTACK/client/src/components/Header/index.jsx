import styles from './Header.module.sass'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        Home
      </Link>
      {location.pathname === '/' && (
        <Link to='/create' className={styles.link}>
          Create Phone
        </Link>
      )}
    </header>
  )
}

export default Header
