const Enmap = require('enmap');

module.exports = class DataBaseController {
  constructor(Name, key, defaultData, autoset = !0) {
    this.database = new Enmap(Name);
    if (key) {
      this.key = key;
      this.defaultData = defaultData || null;
      this.autoset = !!autoset;
      if (autoset == true && defaultData && "string" == typeof key && !this.database.has(key)) this.database.set(key, defaultData);
    }
  }
  
  get get() {
    return this.database.get(this.key);
  }
  
  get has() {
    return this.database.has(this.key);
  }
  
  set(newData) {
    return this.database.set(this.key, newData), this;
  }
  
  delete() {
    return this.database.delete(this.key), this;
  }
  
  clear() {
    return this.database.set(this.key, this.defaultData);
  }
}