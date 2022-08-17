'use strict';

Object.prototype.stringify = function () {
  return JSON.stringify(this.valueOf());
}

String.prototype.isNumber = function () {
  return !!this.toString().split('').map(e => Boolean(e.match(/[0-9]/))).filter(e => e == !1).length;
}

Number.prototype.isNumber = function () {
  return !!this.toString().split('').map(e => Boolean(e.match(/[0-9]/))).filter(e => e == !1).length;
}

String.prototype.toChId = function () {
  return this.replace(/[<#!>]/g, "");
}