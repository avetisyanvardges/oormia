export const MAX_INPUT_LENGTH = 255;

export const SIGN_UP_VALIDATION = {
  PASSWORD: {
    MIN: 8,
    MAX: 72,
  },
};

export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
export const PHONE_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
