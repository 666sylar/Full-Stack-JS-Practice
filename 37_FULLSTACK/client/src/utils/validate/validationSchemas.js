import * as yup from 'yup';

export const PHONE_VALIDATION_SCHEMA = yup.object({
  model: yup
    .string()
    .required('Model is required')
    .min(1, 'Model must be at least 1 character')
    .max(50, 'Model cannot exceed 50 characters'),
  year: yup
    .number()
    .required('Year is required')
    .min(2000, 'Year must be 2000 or later')
    .max(
      new Date().getFullYear(),
      `Year cannot be later than ${new Date().getFullYear()}`
    ),
  ram: yup
    .number()
    .required('RAM is required')
    .oneOf([4, 6, 8, 12, 16], 'RAM must be one of 4, 6, 8, 12, or 16 GB'),
  processor: yup
    .string()
    .required('Processor is required')
    .min(1, 'Processor must be at least 1 character')
    .max(50, 'Processor cannot exceed 50 characters'),
  screenSize: yup
    .number()
    .required('Screen size is required')
    .min(4.0, 'Screen size must be at least 4.0 inches')
    .max(10.0, 'Screen size cannot exceed 10.0 inches'),
  brandId: yup
    .number()
    .required('Brand is required')
    .positive('Brand ID must be a positive number')
    .integer('Brand ID must be an integer'),
  hasNFC: yup.boolean(),
  phoneImage: yup
    .mixed()
    .nullable()
    .test(
      'fileSize',
      'File size is too large',
      value => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      'fileType',
      'Unsupported file format',
      value =>
        !value || (value && ['image/jpeg', 'image/png'].includes(value.type))
    ),
});
