Function.prototype.myBind = function (context, ...args1) {
  const symbol = Symbol();
  context[symbol] = this;
  // const self = this
  // return function(...args2) {
  //  self.apply(context,[...args1, ...args2])
  // }
  return function (...args2) {
    const s = context[symbol](...args1, ...args2);
    delete context[symbol];
    return s;
  };
};
Function.prototype.bind2 = function (context, ...args1) {
  var self = this;

  var fBound = function (...args2) {
    return self.apply(
      this instanceof fBound ? this : context,
      args1.concat(args2)
    );
  };

  fBound.prototype = self.prototype;
  return fBound;
};

function curry(fn, ...args) {
  if (args.length < fn.length) {
    return function (...args1) {
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

function mynew(func, ...args) {
  const obj = {};
  obj.__proto__ = func.prototype;
  let result = func.apply(obj, args);
  return result instanceof Object ? result : obj;
}
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name);
};

const debounce = (func, wait, immediate) => {
  // 'private' variable to store the instance
  // in closure each timer will be assigned to it
  let timeout;

  // debounce returns a new anonymous function (closure)
  return function () {
    // reference the context and args for the setTimeout function
    let context = this,
      args = arguments;

    // should the function be called now? If immediate is true
    // and not already in a timeout then the answer is: Yes
    const callNow = immediate && !timeout;

    // base case
    // clear the timeout to assign the new timeout to it.
    // when event is fired repeatedly then this helps to reset
    clearTimeout(timeout);

    // set the new timeout
    timeout = setTimeout(function () {
      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;

      // check if the function already ran with the immediate flag
      if (!immediate) {
        // call the original function with apply
        func.apply(context, args);
      }
    }, wait);

    // immediate mode and no wait timer? Execute the function immediately
    if (callNow) func.apply(context, args);
  };
};

function useDebounce(fn, delay, dep = []) {
  const { current } = useRef({ fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback(function f(...args) {
    if (current.timer) {
      clearTimeout(current.timer);
    }
    current.timer = setTimeout(() => {
      current.fn.call(this, ...args);
    }, delay);
  }, dep);
}

import { memo } from 'react';

const List = memo(function List({ items }) {});
export default function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab] // ...so as long as these dependencies don't change...
  );
  return (
    <div className={theme}>
      <List items={visibleTodos} />
    </div>
  );
}

const words = [
  'preference',
  'present',
  'pressure',
  'preview',
  'premium',
  'statement',
  'statistics',
  'stabilize',
  'stereotype',
  'stethoscope',
  'internship',
  'interview',
  'intersection',
  'intermediate',
  'interpretation',
  'relationship',
  'relaxation',
  'religious',
  'remarkable',
  'remember',
];

function buildTree(strArr) {
  const result = {};

  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i].split('');
    let temp = result;
    while (str.length) {
      const char = str.shift();
      if (!temp[char]) {
        temp[char] = {};
      }
      temp = temp[char];
    }
  }
  return result;
}

function search(prefix) {
  const tree = buildTree(words);
  const charArr = prefix.split('');
  const result = [];

  let targetObj = tree;

  while (charArr.length) {
    const char = charArr.shift();
    targetObj = targetObj[char];
  }
  recurse(prefix, targetObj, result);

  return result;
}

function recurse(prefix, obj, result) {
  let _pre = prefix;
  const keys = Object.keys(obj);

  if (keys.length) {
    for (let i = 0; i < keys.length; i++) {
      recuise(_pre + keys[i], obj[keys[i]], result);
    }
  } else {
    result.push(_pre);
  }
}

console.log(JSON.stringify(search('pre')));

function returnNeighborItem(data) {
  let maxCol = 0;
  let maxRow = 0;
  for (let i = 0; i < data.length; i++) {
    const [row, col] = data[i];
    if (col > maxCol) maxCol = col;
    if (row > maxRow) maxRow = row;
  }

  const transferData = [];
  for (let i = 0; i <= maxRow; i++) {
    transferData[i] = [];
    for (let j = 0; j <= maxCol; j++) {
      if (data.find((x) => JSON.stringify(x) === JSON.stringify([i, j]))) {
        transferData[i][j] = { type: 'yellow', value: [i, j] };
      } else transferData[i][j] = { type: 'white' };
    }
  }

  const result = [];
  for (let i = 0; i <= maxRow; i++) {
    for (let j = 0; j <= maxCol; j++) {
      const item = transferData[i][j];
      if (item.type === 'yellow') {
        const temp = [];
        getRelativeItem(i, j, item, transferData, temp);
        result.push(temp);
      }
    }
  }
  return result;
}
function getRelativeItem(i, j, item, transferData, result) {
  result.push(item.value);
  item.type = 'white';
  // top
  if (j - 1 > 0) {
    const topItem = transferData[i][j - 1];
    if (topItem.type === 'yellow') {
      getRelativeItem(i, j - 1, topItem, transferData, result);
    }
  }
  // right
  if (i + 1 < transferData.length) {
    const rightItem = transferData[i + 1][j];
    if (rightItem.type === 'yellow') {
      getRelativeItem(i + 1, j, rightItem, transferData, result);
    }
  }
  // bottom
  if (j + 1 < transferData[0].length) {
    const bottomItem = transferData[i][j + 1];
    if (bottomItem.type === 'yellow') {
      getRelativeItem(i, j + 1, bottomItem, transferData, result);
    }
  }
  // left
  if (i - 1 > 0) {
    const leftItem = transferData[i - 1][j];
    if (leftItem.type === 'yellow') {
      getRelativeItem(i - 1, j, leftItem, transferData, result);
    }
  }
}

let componentHooks = [];
let currentHookIndex = 0;

// How useState works inside React (simplified).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // This is not the first render,
    // so the state pair already exists.
    // Return it and prepare for next Hook call.
    currentHookIndex++;
    return pair;
  }

  // This is the first time we're rendering,
  // so create a state pair and store it.
  pair = [initialState, setState];

  function setState(nextState) {
    // When the user requests a state change,
    // put the new value into the pair.
    pair[0] = nextState;
    updateDOM();
  }

  // Store the pair for future renders
  // and prepare for the next Hook call.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}
