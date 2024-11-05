import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TODO_VALIDATION_SCHEMA } from '../../util/validate/validationSchema';
import styles from './ToDo.module.sass';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import UserProfile from '../UserProfile';
import { addToDo } from '../../store/slice/toDosSlice';

const ToDoForm = () => {
  const dispatch = useDispatch();

  const initialValues = { task: '', deadline: '' };

  const handleSubmit = ({ task, deadline }, { resetForm }) => {
    dispatch(addToDo({ task, deadline }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <label htmlFor='taskInput'>
            <UserProfile /> To Do:
          </label>
          <div className={styles.inputWrapper}>
            <Field
              type='text'
              name='task'
              id='taskInput'
              placeholder='Enter a task'
              className={classNames(styles.input, {
                [styles.invalid]: errors.task && touched.task,
              })}
            />
            <ErrorMessage
              name='task'
              component='div'
              className={styles.error}
            />
          </div>

          <label>
            Deadline:
            <Field
              type='date'
              name='deadline'
              id='deadline'
              className={styles.dateInput}
            />
          </label>

          <button type='submit' className={styles.submitButton}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ToDoForm;
