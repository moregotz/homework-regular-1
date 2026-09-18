class Validator {
  validateUsername(name) {
    this.name = name;
    if (!this.name) return false;

    return /^(?![-_])(?!\d{3})[a-zA-Z0-9_-]+(?<![-_])(?<!\d{3})$/.test(this.name);
  }
}

export default Validator;
