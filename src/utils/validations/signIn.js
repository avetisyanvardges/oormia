import * as yup from 'yup';
import {
  MAX_INPUT_LENGTH,
  PASSWORD_REGEX,
  SIGN_UP_VALIDATION,
} from 'constants/validations';

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .max(MAX_INPUT_LENGTH)
    .required(),
  password: yup
    .string()
    .min(
      SIGN_UP_VALIDATION.PASSWORD.MIN,
      ({min}) => `Password must be at least ${min} characters`,
    )
    .matches(
      PASSWORD_REGEX,
      'One Uppercase, One Lowercase, One Number and One Special Case Character',
    )
    .required('Password is required'),
});

export default signInSchema;
