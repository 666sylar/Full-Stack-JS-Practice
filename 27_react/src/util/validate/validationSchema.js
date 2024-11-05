import * as Yup from 'yup';

export const TODO_VALIDATION_SCHEMA = Yup.object().shape({
  task: Yup.string().required('Task is required'),
  deadline: Yup.date()
    .nullable()
    .notRequired(),
});
