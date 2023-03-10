interface Deverloper {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Deverloper | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}

let tony = introduce();
console.log(tony.skill); //유니온 타입 공통된 속성만 접근할 수 있어서 이렇다.

//타입 단언으로 skill을 보장 시켜야함.

if ((tony as Deverloper).skill) {
  let skill = (tony as Deverloper).skill; //타입을 구체화 시킴, 가독성이 많이 떨어짐
  console.log(skill);
}

//타입가드 함수
//is~ 의 형태를 많이 띔

//타입 가드 정의
function isDeveloper(target: Deverloper | Person): target is Deverloper {
  return (target as Deverloper).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill); //디펠로퍼면 skill이 제공됨
} else {
  tony.age; //그게 아니면 age가 제공됨
}
