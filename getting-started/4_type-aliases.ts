//확장이 용이한 interface로 하는 것을 공식 문서에서 추천

//유니온 타입
interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

function askSomeone(someeone: Developer2 | Person2) {
  // someeone.skill; // 인터페이스같은 구조체 활용시에는 공통되는 타입만 가능하다
  someeone.name;
}

//인터섹션 타입
let a: string | number | boolean;
let b: string & number & boolean; //b는 never: 절대 될 수 없는 타입이다. 왜냐면 스트링이면서 넘버면서 불린인 값은 불가능하기 때문에

function askSomeone2(someeone: Developer2 & Person2) {
  someeone.age;
  someeone.skill;
  someeone.name;
  //에러안난다.
}
