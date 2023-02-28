interface User {
  age: number;
  name: string;
}

let seho: User = { age: 11, name: "세호" };

interface SumFunc {
  (a: number, b: number): number;
}

let sum: SumFunc = function (a: number, b: number) {
  return a + b;
};

//인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  age: number;
  lang: string;
}

// interface Developer extends Person {
//   lang: string;
// }

let capt: Developer = {
  lang: "java",
  name: "하이",
  age: 1,
};
