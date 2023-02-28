//특정 값들의 집합을 의미하는 자료형
// enum Shoes {
//   Nike,
//   Adidas,
// }

enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 1) 0  => 값을 지정하지 않으면 숫자형 이넘으로 취급됨 순서대로 0,1,2,3,4,...

//2) 나이키
