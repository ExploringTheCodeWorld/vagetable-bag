class EnumClass {
  constructor(values) {
    this.values_ = values.map((label, index) => ({ value: index+1, label }));
    this.default = this.values_[0];
  }

  values() {
    return this.values_;
  }

  getByKey(key) {
    return this.values_.find(v => v.label === key);
  }

  getByValue(value) {
    return this.values_.find(v => v.value === value);
  }

  contains(valueOrKey) {
    return Boolean(this.getByKey(valueOrKey)) || Boolean(this.getByValue(valueOrKey));
  }

  getDefault() {
    return this.default;
  }

  static from(values) {
    return new this(values);
  }
}

export default EnumClass;