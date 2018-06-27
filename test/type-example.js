
const type = require('./type');

// import type from './type';

console.log(type.isUndefined(undefined));
console.log(type.isUndefined(NaN));

console.log(type.isVoid0(undefined));
console.log(type.isVoid0(null));

console.log(type.isNull(null));
console.log(type.isNull(undefined));

console.log(type.isNaN(NaN));
console.log(type.isNaN(Infinity));

console.log(type.isInfinity(Infinity));
console.log(type.isInfinity(NaN));

console.log(type.isNumber(123));
console.log(type.isNumber('123'));

console.log(type.isPureNumber(123));
console.log(type.isPureNumber(NaN));

console.log(type.isBoolean(true));
console.log(type.isBoolean(new Boolean(true)));
console.log(type.isBoolean('xxx'));

console.log(type.isString('xxx'));
console.log(type.isString(new String('xxx')));
console.log(type.isString(null));

console.log(type.isObject(null));
console.log(type.isObject(new String('xxx')));
console.log(type.isObject('xxx'));

console.log(type.isPureObject(new String('xxx')));
console.log(type.isPureObject(null));

console.log(type.isFunction(() => 'xxx'));
console.log(type.isFunction(new Function('a', 'return "x"')));
console.log(type.isFunction({}));

console.log(type.isArray([]));
console.log(type.isArray(new Array()));
console.log(type.isArray({}));



