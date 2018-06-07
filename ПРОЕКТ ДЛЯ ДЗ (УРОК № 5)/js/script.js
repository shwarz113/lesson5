//открыть магаз
let open = document.getElementById('open-btn');

//меню магазина
let name = document.getElementsByClassName('name');
let nameValue = document.getElementsByClassName('name-value');
let budget = document.getElementsByClassName('budget');
let budgetValue = document.getElementsByClassName('budget-value');
let goods = document.getElementsByClassName('goods');
let goodsValue = document.getElementsByClassName('goods-value');
let items = document.getElementsByClassName('items');
let itemsValue = document.getElementsByClassName('items-value');
let employers = document.getElementsByClassName('employers');
let employersValue = document.getElementsByClassName('employers-value');
let discount = document.getElementsByClassName('discount');
let discountValue = document.getElementsByClassName('discount-value');
let isopen = document.getElementsByClassName('isopen');
let isopenValue = document.getElementsByClassName('isopen-value');

//категории товаров
let goodsItem = document.getElementsByClassName('goods-item');

//кнопки
let btn = document.getElementsByTagName('button');

//поля ввода товаров, времени и расчета бюджета 
let chooseItem = document.querySelector('.choose-item');
let timeValue = document.querySelector('.time-value');
let countBudgetValue = document.querySelector('.count-budget-value');
//поля имен сотрудников
let hireEmployersItem = document.querySelectorAll('hire-employers-item');