

// typeof 只能返回6种字符串结果: number, boolean, string, object, function, undefined

// typeof "John"                 // 返回 string
// typeof 3.14                   // 返回 number
// typeof NaN                    // 返回 number
// typeof false                  // 返回 boolean
// typeof [1,2,3,4]              // 返回 object
// typeof {name:'John', age:34}  // 返回 object
// typeof new Date()             // 返回 object
// typeof function () {}         // 返回 function
// typeof myCar                  // 返回 undefined (如果 myCar 没有声明)
// typeof null                   // 返回 object

// "John".constructor                 // 返回函数 String()  { [native code] }
// (3.14).constructor                 // 返回函数 Number()  { [native code] }
// false.constructor                  // 返回函数 Boolean() { [native code] }
//   [1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
// {name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
// new Date().constructor             // 返回函数 Date()    { [native code] }
// function () {}.constructor         // 返回函数 Function(){ [native code] }


/*
Number
  NaN
  Infinity
  !NaN
  new Number()

Boolean
  boolean: true, false
  new Boolean()

String
  string: 'xxx'
  new String()

Object
  null
  !null
  new Number()
  new Boolean()
  new String()
  new Object()
  new Array()
  new Date()
  new Set()
  new Map()
  new RegExp()
  ...

function

undefined

 */

let globalIsNaN = isNaN;

module.exports = {

  isUndefined(arg) {
    return arg === undefined; // typeof arg === 'undefined'
  },

  isVoid0(arg) {
    return this.isUndefined(arg);
  },

  isNull(arg) {
    return arg === null; // typeof null === 'object'
  },

  isNaN(arg) {
    return isNaN(arg); // typeof NaN === 'number'; NaN !== NaN
  },

  isInfinity(arg) {
    return arg === Infinity; // typeof Infinity === 'number'
  },

  isNumber(arg) {
    if (typeof arg === 'number') return true;
    if (typeof arg === 'object' && !this.isNull(arg) && arg.constructor.toString().includes('Number')) return true;
    return false;
  },

  /* 正常的数字, 除去NaN和Infinity之外 */
  isPureNumber(arg) {
    return !this.isNaN(arg) && !this.isInfinity(arg) && this.isNumber(arg);
  },

  isBoolean(arg) {
    return typeof arg === 'boolean' ? true : (typeof arg === 'object' && !this.isNull(arg) && arg.constructor.toString().includes('Boolean'));
  },

  isString(arg) {
    return typeof arg === 'string' ? true : (typeof arg === 'object' && !this.isNull(arg) && arg.constructor.toString().includes('String'));
  },

  isObject(arg) {
    return typeof arg === 'object';
  },

  /* 除去null之外的对象 */
  isPureObject(arg) {
    return this.isObject(arg) && !this.isNull(arg);
  },

  isFunction(arg) {
    return typeof arg === 'function';
  },

  isArray(arg) {
    return this.isPureObject(arg) && arg.constructor.toString().includes("Array");
  },

  isDate(arg) {
    return this.isPureObject(arg) && arg.constructor.toString().includes("Date");
  },

  isRegExp(arg) {
    return this.isPureObject(arg) && arg.constructor.toString().includes("RegExp");
  },

  isSet(arg) {
    return this.isPureObject(arg) && arg.constructor.toString().includes("Set");
  },

  isMap(arg) {
    return this.isPureObject(arg) && arg.constructor.toString().includes("Map");
  }
}