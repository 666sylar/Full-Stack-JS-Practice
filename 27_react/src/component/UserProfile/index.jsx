import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsersThunk } from '../../store/slice/usersSlice';
import styles from './UserProfile.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleExclamation,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { users, isFetching, error } = useSelector(
    ({ usersList }) => usersList
  );

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  if (isFetching)
    return (
      <span>
        Loading
        <FontAwesomeIcon icon={faSpinner} />
      </span>
    );
  if (error)
    return (
      <span>
        {error.message}
        <FontAwesomeIcon icon={faCircleExclamation} />
      </span>
    );

  const user = users[0];

  return (
    user && (
      <div className={styles.userProfile}>
        <div className={styles.avatar}>
          <img
            src={user.picture.medium}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>
        <span>
          {user.name.first} {user.name.last}
        </span>
      </div>
    )
  );
};

export default UserProfile;
