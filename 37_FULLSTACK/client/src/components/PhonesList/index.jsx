import RingLoader from 'react-spinners/BeatLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getPhonesThunk,
  deletePhoneThunk,
} from '../../store/slices/phonesSlice.js';
/*import styles from 'PhonesList.module.sass';*/

export const UsersList = () => {
  const { phones, isFetching, error } = useSelector(
    ({ phonesData }) => phonesData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonesThunk());
  }, [dispatch]);

  return (
    <>
      <RingLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul>
        {phones.map(p => (
          <li key={p.id}>
            <button onClick={() => dispatch(deletePhoneThunk(p.id))}>X</button>
            {/* <img
              className={styles.phoneImage}
              src={
                u.image ? `http://localhost:5000/images/${u.image}` : defImage
              }
              alt={`${u.firstName} ${u.lastName}`}
            />*/}
            <p>{JSON.stringify(p)}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;