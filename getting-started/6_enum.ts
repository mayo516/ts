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

//이넘의 활용 (예제)
enum Answer {
  Yes = "Y",
  No = "N",
}

// function askQuestion(answer: string) {
//   if (answer === "yes") {
//     console.log("정답입니다.");
//   }
//   if (answer === "no") {
//     console.log("오답입니다.");
//   }
// }

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}

askQuestion("예스");
askQuestion(Answer.No); //이거만 됨
askQuestion("yes");
//셋다 되는데 여기선 안된다.

//드롭다운등의 목록에서 많이 쓰인다.
