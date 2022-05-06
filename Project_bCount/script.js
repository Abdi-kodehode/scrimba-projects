let second = 1000 ;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let timer;

document.getElementById('btn').addEventListener("click", function() {
  let orderDate = document.getElementById("myBirth").value.split('-');
  let birthday = new Date(orderDate[0], orderDate[1] - 1, orderDate[2]);
  clearInterval(timer);
  countDown(birthday);
  timer = setInterval(countDown, 1000, birthday);
});

function countDown(birthday) {
  let today = new Date();
  let timeLoop = birthday - today;

  if (timeLoop < 0) {
    clearInterval(timer);
    document.getElementById('greeting-el').textContent = "Bursdag utgått";
    return;

  }

  document.getElementById('day').textContent = Math.floor(timeLoop / day);
  document.getElementById('hour').textContent = Math.floor((timeLoop % day) / hour);
  document.getElementById('minute').textContent = Math.floor((timeLoop % hour) / minute);
  document.getElementById('second').textContent = Math.floor((timeLoop % minute) / second);
  
}

