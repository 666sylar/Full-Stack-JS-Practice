import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getPhonesThunk,
  deletePhoneThunk,
  updatePhoneThunk,
} from '../../store/slices/phonesSlice.js';
import styles from './PhonesList.module.sass';

export const UsersList = () => {
  const { phones } = useSelector(({ phonesData }) => phonesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhonesThunk());
  }, [dispatch]);

  const handleNFCChange = (id, currentValue) => {
    dispatch(updatePhoneThunk({ id, hasNFC: !currentValue }));
  };

  return (
    <>
      <ul>
        {phones.map(p => (
          <li key={p.id} className={styles.phone}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={`http://localhost:5555/images/${p.image}`}
                alt={`${p.Brand?.name} ${p.model}`}
              />
            </div>

            <p>
              {p.Brand?.name} {p.model}
            </p>
            <p>Year: {p.year}</p>
            <p>{`Screen size: ${p.screenSize}″`}</p>
            <p>Processor: {p.processor}</p>
            <p>{`RAM: ${p.ram}GB`}</p>
            <label>
              NFC:
              <input
                type='checkbox'
                checked={p.hasNFC}
                onChange={() => handleNFCChange(p.id, p.hasNFC)}
              />
            </label>

            <button onClick={() => dispatch(deletePhoneThunk(p.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
