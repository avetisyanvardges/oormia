import * as yup from 'yup';
import {
  MAX_INPUT_LENGTH,
  PASSWORD_REGEX,
  SIGN_UP_VALIDATION,
} from 'constants/validations';

const signUpSchema = yup.object().shape({
  firstName: yup.string().max(MAX_INPUT_LENGTH).required(),
  lastName: yup.string().max(MAX_INPUT_LENGTH).required(),
  phoneNumber: yup.string().required('field.required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .max(MAX_INPUT_LENGTH)
    .required('field.required'),
  password: yup
    .string()
    .min(SIGN_UP_VALIDATION.PASSWORD.MIN, () => ' ')
    .matches(PASSWORD_REGEX, ' ')
    .required('field.required'),
  guide: yup.boolean().required(),
  guideForCountry: yup.string(),
});

export default signUpSchema;
