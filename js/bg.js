const bgClass = document.querySelector('.bg');
const loginBgClass = document.querySelector('.login-bg');

const imgArr = ['00.jpeg', '01.jpg', '02.jpg'];
const randomImg = imgArr[Math.floor(Math.random()*imgArr.length)];

bgClass.style.backgroundImage = `url(./img/${randomImg})`;
loginBgClass.style.backgroundImage = `url(./img/${randomImg})`;