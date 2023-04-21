import * as yup from 'yup';
export const validationSchema = yup.object({
    user_name: yup
    .string()
    .required('Name is required')
    .min(3, 'Minimum 3 characters allowed')
    .max(100, 'Maximum 100 characters allowed'),

    user_email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    message: yup
        .string()
        .required('Message is required')
        .max(150, 'Maximum 150 characters allowed')
});