import PhonesList from '../../components/PhonesList/index.jsx'
import styles from './PhoneListPage.module.sass'

function PhoneListPage () {
  return (
    <main className={styles.list}>
      <h2>Phone List</h2>
      <PhonesList />
    </main>
  )
}

export default PhoneListPage
