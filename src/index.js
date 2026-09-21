class Validator {
  validateUsername(name) {
    this.name = name;
    if (!this.name) return false;

    return /^(?![-_\d])(?!.*\d{4})[a-zA-Z0-9_-]+(?<![-_\d])$/.test(this.name);
  }
}

export default Validator;
