---
title: ts-type-guard
date: 2020/10/25 10:56:13
tag: 砖头
img: /img/ts-logo.png
---

## Foreword

a common ts problem, but still took some time to fix it, recording the progress

## Question

Let's makeup a function, according to the const dataMap, return the map value by the map key

```ts
const map = {
  a: A,
  b: B,
};

function Foo(type: string) {
  return map(type);
}
```

## Idea

the usual thinking.

```ts
class A {
    a = 1
}
class B {
    b= true
}

interface IClassMap {
	a: A,
	b: B
}

function demo<T extends keyof IClassMap>(key:T) : IClassMap[T] | null{
    switch(key) {
        case 'a':
            return new A()
        case 'b':
            return new B()
    }
    return null
}
```

however, the ts report the [error](https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAECC0G8BQ1XTNAvNAjEgvkqJDAEKIpoBG2ALgE4CuApgUkgJYB2tz9AZmGDNoASQDC4KAFkwABwoBIMAC44AGiSKqa0myT9GXYLQ4B7LtAAmzALZmAPABVozAB68uVmAGtmATzN+MUkSWTkAPgAKP38VJwBKaDUJKQhwgG0nAF1oAB9oLkYQEGQ0aAgAdw5aYAALGICksvK0YEgRAHIwTpVKVtb6ZlpGeksuZkq4KIT+1vaILqpeuYHUIZGxwsnoUhm5wnKN0fHikAIgA)

```md
Type 'A' is not assignable to type 'IClassMap[T]'. Type 'A' is not assignable to type 'A & B'. Property 'b' is missing in type 'A' but required in type 'B'.
```

why???

the type of IClassMap[T] is **A & B**, but we need **A | B** here.

so I try to have another [solution](https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAECC0G8BQ1XTNAvNAjEgvkqJDAEKIpoBG2ALgE4CuApgUkQPYB2Et0xUALJgADlgoBIMAC44AGiQSqs0myQAzRl2C0Alt2gATZgFsOAHgAq0ZgA9azLoZgBrZgE8O66LXcjmXvzgQqIAfNAAFG7u0pYAlNCyEb7+gQIQwiJxANqWALoUaND0zLSM9FxBJJnZ0QUA-JFczADuVSEitR55EXEJslyMICDoMGBc7mrA3Lz8wOLGZhEA5FTLCUA)

```ts
class A {
    a = 1
}
class B {
    b= true
}

const classMap = {
	a: A,
	b: B
}

function demo<T extends keyof typeof classMap> (key:T) : (typeof classMap)[T] {
    return classMap[key] ? (new classMap[key]()) : null as any
}

const cc = demo('b')
```

the point here is conditional operator and the const map. but this solution is a trick way rather a universal way

final [solution](https://www.typescriptlang.org/play?target=1#code/MYGwhgzhAECC0G8BQ1XTNAvNAjEgvkqJDAEKIpoBG2ALgE4CuApgUkgJYB2tz9AZmGDNoASQDC4KAFkwABwoBIMAC44AGiSKqa0m3ZJ+jLsFocA9l2gATZgFtzAHgAq0ZgA9eXazADWzAE9zfjFJElk5dWgAaTdPZm8YCSkICIBtZwBdAD4ACn8AlWcASmg1WOQ0aAgAdw5aYAALfMDSyqq0YEgRAHIwHpVKDo76ZlpGeisuZhq4XNLIGKGOroheqgHl4dRR8cnoadnSefQYaOXCKt2JqcYQEFP0LgD9YEsIWmhgYCwbe3Ncj0NqVoEA) , ~~I can't find out more solution....~~

```ts
class A {
    a = 1
}
class B {
    b= true
}

interface IClassMap {
	a: A,
	b: B
}



function demo<T extends keyof IClassMap, K extends IClassMap[T]>(key:T) : K {
    switch(key) {
        case 'a':
            return new A() as K
        case 'b':
            return new B() as K
    }
    return null as any
}

const cc = demo('b')
```
