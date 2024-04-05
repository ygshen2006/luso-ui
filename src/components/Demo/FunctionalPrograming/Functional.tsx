import { Component } from "react";

const FunctionDemo = () => {
  // ********** immutable  *******
  // Not change the global value

  // ************ pure function:
  // 1: Take at least one parameter
  // 2: Return a new object
  type Person = {
    name: string;
    age: number;
  };
  let obj: Person = {
    name: "john",
    age: 41,
  };
  let objs: Person[] = [obj];

  const fn = () => {
    // This is anti-immutable
    obj.name = "changed";
  };

  fn();

  const fn2 = (p: Person) => {
    // This also anti-immutable
    p.name = "test";
  };
  fn2(obj);

  const fn3 = () => {
    // this is anti-immutable
    objs.push({ name: "Tim", age: 1 });
  };

  // This is immutable&pure function
  const fn4 = (p: Person) => ({
    ...p,
    name: "john2",
  });

  const fn5 = () => {
    // this is mutable
    objs.concat({ name: "Time", age: 1 });
  };

  //**************** High order function */
  // 1: Functions that can manipulate other functions
  // 2. Take function as the parameter or return a new function. Or both
  // 3. Examples: Array.filter(), Array.map(), Array.reduce()
  let array: number[] = [1, 2, 3, 4];
  const fn6 = (a: number[]) => {
    const result = [...a].reduce<number>((p, c) => p + c, 0);
    console.log(result);
  };

  const changeUserName = () => {
    fn();
  };

  // Self defined HOF
  const invokeIf = (
    condition: boolean,
    trueIf: () => boolean,
    falseIf: () => boolean,
  ) => {
    if (condition) {
      trueIf();
    } else {
      falseIf();
    }
  };

  // Currying
  const userLogs = (userName: string) => (message: string) =>
    console.log(`Hello ${userName}, this is your message :${message}`);

  // Recursion
  const countDown = (value: number, fn: (v: number) => void) => {
    fn(value);
    setTimeout(() => {
      if (value > 0) countDown(value - 1, fn);
    }, 2000);
  };
  countDown(100, (value) => console.log(value));

  return (
    <>
      <h1>Hi Everyone, i am: {obj.name}</h1>
      <button onClick={changeUserName}></button>
    </>
  );
};

export default FunctionDemo;
