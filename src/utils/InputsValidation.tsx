// validator.tsx
export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return "Please enter a valid email address";
  }
  if (email.length === 0 || email === "") {
    return "Please enter an email address";
  }
}

export const validatePassword = (password: string) => {
  if (password.length === 0 || password === "") {
    return "Please enter a password";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
}


export const validatePasswordConfirmation = (password: string, password_confirmation: string) => {
  if (password_confirmation.length === 0 || password_confirmation === "") {
    return "Please enter a password confirmation";
  }
  if (password_confirmation !== password) {
    return "Passwords do not match";
  }
}

export const validateName = (name: string) => {
  if (name.length === 0 || name === "") {
    return "Please enter a name";
  }
}
