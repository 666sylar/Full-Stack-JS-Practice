import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { createPhoneThunk } from '../../store/slices/phonesSlice'
import { PHONE_VALIDATION_SCHEMA } from '../../utils/validate/validationSchemas'
import { useEffect } from 'react'
import { getBrandsThunk } from '../../store/slices/brandsSlice'
import styles from './PhoneForm.module.sass'
import RingLoader from 'react-spinners/BeatLoader'

function PhoneForm () {
  const { brands, isFetching, error } = useSelector(
    ({ brandsData }) => brandsData
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBrandsThunk())
  }, [dispatch])

  const initialValues = {
    model: '',
    year: '',
    ram: '',
    processor: '',
    screenSize: '',
    hasNFC: false,
    brandId: '',
    phoneImage: null
  }

  const handleSubmit = (values, formikBag) => {
    const formData = new FormData()

    formData.append('model', values.model)
    formData.append('year', values.year)
    formData.append('ram', values.ram)
    formData.append('processor', values.processor)
    formData.append('screenSize', values.screenSize)
    formData.append('hasNFC', values.hasNFC)
    formData.append('brandId', values.brandId)
    formData.append('phoneImage', values.phoneImage)

    dispatch(createPhoneThunk(formData))

    formikBag.resetForm()
  }

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={PHONE_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form className={styles.form}>
          <div>
            <label>Model:</label>
            <Field name='model' className={classes.input} />
            <ErrorMessage
              name='model'
              component='div'
              className={classes.error}
            />
          </div>

          <div>
            <label>Year:</label>
            <Field name='year' type='number' className={classes.input} />
            <ErrorMessage
              name='year'
              component='div'
              className={classes.error}
            />
          </div>

          <div>
            <label>RAM:</label>
            <Field name='ram' as='select' className={classes.input}>
              <option value=''>Select RAM</option>
              {[4, 6, 8, 12, 16].map(ram => (
                <option key={ram} value={ram}>
                  {ram} GB
                </option>
              ))}
            </Field>
            <ErrorMessage
              name='ram'
              component='div'
              className={classes.error}
            />
          </div>

          <div>
            <label>Processor:</label>
            <Field name='processor' className={classes.input} />
            <ErrorMessage
              name='processor'
              component='div'
              className={classes.error}
            />
          </div>

          <div>
            <label>Screen Size:</label>
            <Field
              name='screenSize'
              type='number'
              step='0.1'
              className={classes.input}
            />
            <ErrorMessage
              name='screenSize'
              component='div'
              className={classes.error}
            />
          </div>

          <div>
            {error && <div>!!!ERROR!!!</div>}
            <RingLoader loading={isFetching} />
            <label>Brand:</label>
            <Field name='brandId' as='select' className={classes.input}>
              <option value=''>Select Brand</option>
              {brands.map(brand => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name='brandId'
              component='div'
              className={classes.error}
            />
          </div>

          <div>
            <label>
              NFC Support:
              <Field name='hasNFC' type='checkbox' />
            </label>
          </div>

          <div>
            <label>Photo:</label>
            <input
              type='file'
              name='phoneImage'
              accept='image/jpeg,image/png'
              onChange={e =>
                formikProps.setFieldValue('phoneImage', e.target.files[0])
              }
            />
            <ErrorMessage
              name='phoneImage'
              component='div'
              className={classes.error}
            />
          </div>

          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
  )
}

export default PhoneForm
