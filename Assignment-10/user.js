
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

// Named export: validateEmail function
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
