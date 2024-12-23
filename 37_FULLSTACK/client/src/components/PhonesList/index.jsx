import RingLoader from 'react-spinners/BeatLoader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  getPhonesThunk,
  deletePhoneThunk
} from '../../store/slices/phonesSlice.js'
import styles from './PhonesList.module.sass'

export const UsersList = () => {
  const { phones, isFetching, error } = useSelector(
    ({ phonesData }) => phonesData
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPhonesThunk())
  }, [dispatch])

  return (
    <>
      <RingLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul>
        {phones.map(p => (
          <li key={p.id}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={`http://localhost:5555/images/${p.image}`}
                alt={`${p.Brand.name} ${p.model}`}
              />
            </div>

            <p>{p.Brand.name}</p>
            <p>{p.model}</p>
            <p>{p.year}</p>
            <p>{p.screenSize}</p>
            <p>{p.processor}</p>
            <p>{p.ram}</p>
            <p>{p.hasNFC}</p>

            <button onClick={() => dispatch(deletePhoneThunk(p.id))}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UsersList
