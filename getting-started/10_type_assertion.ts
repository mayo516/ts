var k;

k = 10;
k = "a";

var k2 = k as string; //as ~ 가 타입 단언 , 개발자가 타입을 더 잘 알고있다.

//타입 단언은 DOM API 조작 관련해서 가장 많이 사용

// let div = document.querySelector("div");
// if (div) {
//   div.innerText = "hi";
// }

let div = document.querySelector("div") as HTMLDivElement; //null은 없을 것이다 단언 하는 것

div.innerText = "hi";
