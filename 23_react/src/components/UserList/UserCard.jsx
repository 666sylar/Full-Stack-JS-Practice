import UserImage from "./UserImage";
import UserContacts from "./UserContacts";
import styles from "./UserList.module.css";

const UserCard = ({ user: { profilePicture, firstName, lastName, contacts } }) => {
  return (
    <div className={styles.userCard}>
      <UserImage src={profilePicture} alt={`${firstName} ${lastName}`} />
      <h2>
        {firstName} {lastName}
      </h2>
      <UserContacts contacts={contacts} />
    </div>
  );
};

export default UserCard;
