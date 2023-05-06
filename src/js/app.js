function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;
  let timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = timeString;
}

updateClock();
setInterval(updateClock, 1000);

let currentDate = new Date();
let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
let formattedDate = currentDate.toLocaleDateString('en-US', options).replace(/\//g, '.');
document.getElementById('date').innerHTML = formattedDate;

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },


});