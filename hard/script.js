let now = new Date();
//1 и 2
let out1 = document.getElementById('lesson1');
out1.style.color = "red";
function plusnull () {
let day = month = seconds = "0";
(now.getSeconds() < 10)?seconds += now.getSeconds():seconds = now.getSeconds();
(now.getDate() < 10)?day += now.getDate():day = now.getDate();
(now.getMonth() < 10)?month += (now.getMonth()+1):month = (now.getMonth()+1);
out1.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + seconds +
				 " " + day + "." + month + "." + now.getFullYear();
}
plusnull();
//3
let out2 = document.getElementById('lesson2');
function rusweek (week) {
	switch (week) {
		case 0: 
			out2.innerHTML = "Воскресенье";
			break;
		case 1: 
			out2.innerHTML = "Понедельник";
			break;
		case 2: 
			out2.innerHTML = "Вторник";
			break;
		case 3: 
			out2.innerHTML = "Среда";
			break;
		case 4: 
			out2.innerHTML = "Четверг";
			break;
		case 5: 
			out2.innerHTML = "Пятница";
			break;
		case 6: 
			out2.innerHTML = "Суббота";
			break;
	}
}
rusweek(now.getDay());
//4
let date1 = document.getElementById('firstDate');
let date2 = document.getElementById('secondDate');
let calс = document.getElementById('calc');
let result = document.getElementById('result');
calc.onclick = function () {
	let ms1 = Date.parse(date1.value);
	let ms2 = Date.parse(date2.value);
	(ms1 <= ms2) ? 
		result.value = (ms2 - ms1)/(1000*60*60*24):
			result.value = "Неправильно заданы даты!";
}