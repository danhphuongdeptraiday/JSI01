let kim = document.getElementById("secondhand");
let minute = document.getElementById("minutehand");
let hour = document.getElementById("hourhand");
setInterval(function () {
  let date = new Date();
  degChangeInMinute = (date.getMinutes() + date.getSeconds() / 60) * 6 - 90;

  minute.style.transform = `rotate(${degChangeInMinute}deg)`;
  degChangeInHour =
    (date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600) * 30 -
    90;

  hour.style.transform = `rotate(${degChangeInHour}deg)`;

  degChangeInSecond = date.getSeconds() * 6 - 90;
  kim.style.transform = `rotate(${degChangeInSecond}deg)`;
  console.log("Giay = " + degChangeInSecond);
  console.log("Phut = " + degChangeInMinute);
  console.log("Gio = " + degChangeInHour);
  console.log("");
}, 1000);
