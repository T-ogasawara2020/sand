// const val5 = [];
// val5.push("neko");
// console.log(val5);

// const name = "猫";
// const message2 = `私の名前は${name}です。`;
// console.log(message2);

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("neko"));

// const nameArr = ["Tom", "Yam"];

// const nameArr2 = nameArr.map((name) => console.log(name));

// const valArr = [1, 2, 3, 4, 5];
// // const newValArr = valArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // valArr.map((value, index) => console.log(value + index));
// const num = 1300;
// console.log(num.toLocaleString());

// 左側がfalseなら右側を返す。
const num = 100;
const fee = num || "金額未設定";
console.log(fee);

// 左側がtrueなら右側を変える。

const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
