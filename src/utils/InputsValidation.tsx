// validator.tsx
export function validateInput(type: string, value: string): string | null {
  switch (type) {
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Invalid email";
      }
      break;

    case "password":
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)) {
        return "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number";
      }
      break;
    
    case "name":
      if (!/^[a-zA-Z0-9_]{3,25}$/.test(value)) {
        return `${type} must contain at least 3 characters and no more than 25 characters`;
      }
      break;
    default:
      break;
  }

  return null; // Return null if validation passes
}
