import PhoneForm from '../../components/PhoneForm/index.jsx'
import styles from './PhoneFormPage.module.sass'

function PhoneFormPage () {
  return (
    <main className={styles.form}>
      <h1>Phone Form</h1>
      <PhoneForm />
    </main>
  )
}

export default PhoneFormPage
