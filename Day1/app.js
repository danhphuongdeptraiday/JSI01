let h1Element = document.getElementsByTagName("h1");
h1Element[0].innerText = "Nguyen Thanh Dat";
h1Element[0].style.color = "red";

let newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "blue";

document.body.appendChild(newDiv);

//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   let i = 100;
//   console.log("Giá trị của i sau khi vòng lặp kết thúc " + i);

//   //   hello();
//   let input = prompt("Enter 0 ");
//   while (input != "0") {
//     input = prompt("Enter 0 again !!!");
//   }

//   alert("Bạn đã nhập đúng r");

let n = 1;

//   if (n == 1) {
//     console.log("n == 1");
//   } else if (n == 2) {
//     console.log("n == 2");
//   } else if (n == 10) {
//     console.log("n == 10");
//   } else {
//     console.log("Khong thoa man");
//   }

switch (n) {
  case 1:
    console.log("n == 1");
    break;
  case 2:
    console.log("n == 2");
    break;

  case 10:
    console.log("n == 10");
    break;

  default:
    console.log("Khong thoa man");
}

function returnFunction() {
  return "hello";
}

console.log(returnFunction());

let a = 10;
let b = 20;
console.log("Tong 2 so " + a + " + " + b + " = " + (a + b));
console.log(`Tong 2 so ${a} + ${b} = ${a + b}`);

// while (true) {
//   setTimeout(function () {
//     console.log("Hello");
//   }, 2000);
// }

// let check = true;
// if (check == true) {
//   setTimeout(function () {
//     console.log("Hello");
//     check = true;
//   }, 2000);
// }
