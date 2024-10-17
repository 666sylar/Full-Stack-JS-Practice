const UserContacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <a href={contact} target="_blank" rel="noreferrer">
            {contact}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserContacts;
