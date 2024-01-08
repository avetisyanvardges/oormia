import * as yup from 'yup';
import { MAX_INPUT_LENGTH, PASSWORD_REGEX } from 'constants/validations';

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .max(MAX_INPUT_LENGTH)
    .required('field.required'),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, 'label.empty')
    .required('field.required'),
});

export default signUpSchema;
