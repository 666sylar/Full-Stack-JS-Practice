import PhoneForm from '../../components/PhoneForm/index.jsx'
import styles from './PhoneFormPage.module.sass'

function PhoneFormPage () {
  return (
    <main className={styles.form}>
      <h2>Phone Form</h2>
      <PhoneForm />
    </main>
  )
}

export default PhoneFormPage
