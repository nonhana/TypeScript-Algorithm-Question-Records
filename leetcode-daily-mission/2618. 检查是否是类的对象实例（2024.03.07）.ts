/* 
  请你编写一个函数，检查给定的值是否是给定类或超类的实例。

  可以传递给函数的数据类型没有限制。例如，值或类可能是  undefined 。

  示例 1：
  输入：func = () => checkIfInstance(new Date(), Date)
  输出：true
  解释：根据定义，Date 构造函数返回的对象是 Date 的一个实例。
  
  示例 2：
  输入：func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }
  输出：true
  解释：
  class Animal {};
  class Dog extends Animal {};
  checkIfInstanceOf(new Dog(), Animal); // true
  Dog 是 Animal 的子类。因此，Dog 对象同时是 Dog 和 Animal 的实例。
  
  示例 3：
  输入：func = () => checkIfInstance(Date, Date)
  输出：false
  解释：日期的构造函数在逻辑上不能是其自身的实例。
  
  示例 4：
  输入：func = () => checkIfInstance(5, Number)
  输出：true
  解释：5 是一个 Number。注意，"instanceof" 关键字将返回 false。
*/

// 1. 使用Object()包装基本类型，然后判断是否是类的实例
function checkIfInstanceOf1(obj: any, classFunction: any): boolean {
  // 在JavaScript中，"类"的概念是通过构造函数和原型链来实现的。
  // 如果 classFunction 不是一个函数，那它就不可能是一个类的构造函数，所以 obj 也不可能是它的实例。
  if (obj === null || obj === undefined || !(classFunction instanceof Function))
    return false;
  // 为什么这里要用Object()包装一下obj？
  // 因为如果obj是一个基本类型，那么直接调用obj instanceof classFunction会报错，
  // 使用Object()包装后，会把基本类型转换为对应的包装对象，然后再进行判断。
  // 比如对于基本类型5，Object(5)返回的是Number对象，所以5 instanceof Number就可以返回true。
  return Object(obj) instanceof classFunction;
}

// 2. 使用递归instanceof判断
function checkIfInstanceOf2(obj: any, classFunction: any): boolean {
  if (
    obj === null ||
    obj === undefined ||
    classFunction == null ||
    classFunction == undefined
  )
    return false;
  while (obj !== classFunction.prototype && (obj = obj.__proto__));
  return obj === classFunction.prototype;
}
