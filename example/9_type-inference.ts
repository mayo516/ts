var a = "a";

function logA(a = "a") {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T;
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: "a",
};

interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}
var detailItems: DetailedDropdown<number> = {
  value: "hi", //Detail에서 number라고 했으니깐 이게 그대로 Dropdown으로 들어감 그래서 number여야 함
  title: "a",
  description: "b",
  tag: "c",
};
