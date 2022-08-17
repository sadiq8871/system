'use strict';

module.exports = class DataBase {
  constructor(db, key) {
    this.db = db;
    this.key = key;
  }
  
  get get() {
    return this.db.get(this.key);
  }
  
  set(value) {
    return this.db.set(this.key, value), this;
  }
  
  check(defaultData) {
    return this.has ? this : this.set(defaultData || {});
  }
  
  get has() {
    return !!this.get;
  }
  
  clear() {
    return this.set({}), this;
  }
  
  delete(key) {
    return this.db.delete(this.key ? this.key : key), this;
  }
  
  toArray() {
    return this.db.array();
  }
  
  stringify() {
    return JSON.stringify(this.db.array());
  }
  
  setProp(key, value) {
    let data = this.get;
    return (data[key] = value), this.set(data), this;
  }
  
  filter(handler) {
    return this.toArray().filter(handler);
  }
  
  map(handler) {
    return this.toArray().map(handler);
  }
  
  find(handler) {
    return this.filter(handler)[0];
  }
  
  shift() {
    return this.toArray().shift();
  }
  
  forEach(handler) {
    return this.db.forEach(handler);
  }
};
