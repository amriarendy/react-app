export function required(field, caption) {
  if (field == "" || field == null) {
    return `${caption} is required.`;
  }
}

export function trimRequired(field, caption) {
  if (!field.trim()) {
    return `${caption} is required.`;
  }
}

export function passwordConfirm(password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Passwords not match.";
  }
}

export function minLength(field, length, caption) {
  if (field.length < length) {
    return `${caption} must be more than ${length} characters.`;
  }
}

export function maxLength(field, length, caption) {
  if (field.length > length) {
    return `${caption} must be less than ${length} characters.`;
  }
}
