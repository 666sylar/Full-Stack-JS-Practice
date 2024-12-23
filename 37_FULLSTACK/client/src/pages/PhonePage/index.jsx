import PhonesList from '../../components/PhonesList/index.jsx';
import PhoneForm from '../../components/PhoneForm/index.jsx';

function PhonePage () {
  return (
    <section>
      <h2>Phone Form</h2>
      <PhoneForm />
      <PhonesList />
    </section>
  );
}

export default PhonePage;
