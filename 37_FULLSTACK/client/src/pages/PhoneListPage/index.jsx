import PhonesList from '../../components/PhonesList/index.jsx';
import styles from './PhoneListPage.module.sass';

function PhoneListPage () {
  return (
    <main className={styles.list}>
      <h1>Phones List</h1>
      <PhonesList />
    </main>
  );
}

export default PhoneListPage;
