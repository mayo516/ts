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
  // someeone.skill; // 공통되는 타입만 가능하다
  someeone.name;
}
