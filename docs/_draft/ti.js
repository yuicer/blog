function myBind(context, ...args1) {
  const symbol = Symbol();
  context[symbol] = this;
  return function(...args2) {
    const s = context[symbol](...args1, ...args2);
    delete context[symbol];
    return s;
  };
}

Function.prototype.myBind = myBind;

let obj = {
  name: 'jack',
  age: 18,
};
function getAge(desc, desc1, desc2) {
  console.log(desc, desc1, desc2);
  return this.age;
}
let myGetAge = getAge.myBind(obj, 'myBind调用', '参数1');
console.log(getAge('正常调用', '参数1', '参数2'));
console.log(myGetAge('参数2'));

function curry(fn, ...args) {
  if (args.length < fn.length) {
    return function(...args1) {
      return curry(fn, ...args.concat(args1));
    };
  } else {
    return fn(...args);
  }
}

function myPromiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);
    // 定义Promise对象resolve的数组
    const result = [];
    // 定义一个计数器用来判断是否所有的promise执行完毕
    let count = 0;
    // 并发执行每一个promise
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          result[i] = res;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    }
  });
}
