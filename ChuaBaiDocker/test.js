let kim = document.getElementById("secondhand");
let minute = document.getElementById("minutehand");

kim.style.transform = "rotate(-90deg)";

let degChangeInSecond = -90;
let degChangeInMinute = -90;
let count = 0;
setInterval(function () {
  count = count + 1;
  if (count % 60 == 0) {
    degChangeInMinute = degChangeInMinute + 6;
    minute.style.transform = `rotate(${degChangeInMinute}deg)`;
  }
  degChangeInSecond = degChangeInSecond + 6;
  kim.style.transform = `rotate(${degChangeInSecond}deg)`;
  console.log("hello");
}, 1000);
