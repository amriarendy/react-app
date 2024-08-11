export function required(field, caption) {
  if (field == "" || field == null) {
    return caption;
  }
}

export function passwordConfirm(password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Passwords not match.";
  }
}
