import * as yup from 'yup';

export const MAX_INPUT_LENGTH = 255;

export const SIGN_UP_VALIDATION = {
  PASSWORD: {
    MIN: 8,
    MAX: 72,
  },
};

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?]).{8,}$/;
export const PHONE_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export const validation = {
  name: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
  email: yup.string().email().required('Email is a required field'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters'),
  // .matches(
  //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  //     "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  // ),
  confirmPassword: yup
    .string()
    .label('confirmPassword')
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
};
