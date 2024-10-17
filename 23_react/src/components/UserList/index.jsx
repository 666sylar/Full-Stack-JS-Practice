import UserCard from "./UserCard";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <div className={styles.userList}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
