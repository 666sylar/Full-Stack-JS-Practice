import * as yup from 'yup';

export const SIGNUP_VALIDATION_SCHEMA = yup.object().shape({
  username: yup.string().required('Required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
  role: yup
    .string()
    .oneOf(['buyer', 'creative'], 'Role is required')
    .required('Required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms')
    .required('Required'),
});

export const LOGIN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});
