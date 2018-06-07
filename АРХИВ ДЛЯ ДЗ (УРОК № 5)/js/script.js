let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');
menu.insertBefore(menuItem[1], menuItem[3]);

let item5 = document.createElement('li');
item5.classList.add('menu-item');
item5.innerHTML = 'Пятый пункт';
menu.appendChild(item5);

let body = document.getElementsByTagName('body');
document.body.style.background = 'url(img/apple_true.jpg)';

let text = document.getElementById('title');
text.innerHTML = "Мы продаем только подлинную технику Apple";

let col = document.querySelectorAll(".column");
let adv = document.querySelector(".adv");
col[1].removeChild(adv);

let question = prompt("Как Вы относитесь к технике Apple? ", 'good');
let promt = document.querySelector(".prompt");
promt.innerHTML = question;