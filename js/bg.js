const bgClass = document.querySelector('.bg');

const imgArr = ['00.jpeg', '01.jpg', '02.jpg'];
const chosenImg = imgArr[Math.floor(Math.random()*imgArr.length)];
const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImg}`;
bgClass.appendChild(bgImg);