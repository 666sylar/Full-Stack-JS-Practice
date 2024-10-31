import { Field } from 'formik';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../../../page/Authorization/Autorization.module.sass';

const FormField = ({ name, type = 'text', label, value, text }) => {
  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        const isError = meta.error && meta.touched;
        const className = classNames(styles.input, {
          [styles.valid]: !isError && meta.touched,
          [styles.invalid]: isError,
        });

        const handleChange = e => {
          if (type === 'radio') form.setFieldValue(name, e.target.value);
          else field.onChange(e);
        };

        return (
          <div className={styles[`${type}Field`]}>
            {type === 'radio' || type === 'checkbox' ? (
              <>
                <input
                  type={type}
                  {...field}
                  className={className}
                  value={value}
                  id={type === 'radio' ? `${name}-${value}` : name}
                  checked={
                    type === 'radio' ? field.value === value : field.value
                  }
                  onChange={handleChange}
                />
                <label htmlFor={type === 'radio' ? `${name}-${value}` : name}>
                  {label && <h3>{label}</h3>}
                  {text && <p>{text}</p>}
                </label>
              </>
            ) : (
              <>
                <input
                  type={type}
                  {...field}
                  {...(value && { value })}
                  className={className}
                  placeholder={label}
                />
              </>
            )}
            {isError && <span className={styles.error}>{meta.error}</span>}
          </div>
        );
      }}
    </Field>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'radio', 'checkbox']),
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  text: PropTypes.string,
};

export default FormField;
