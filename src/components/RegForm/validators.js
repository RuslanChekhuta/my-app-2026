export const validatePassword = (password) => {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};

export const checkPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const checkRequiredFields = (fields) => {
  return fields.every((field) => field.trim() !== "");
};
