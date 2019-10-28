let money;
let time;

money = prompt("Ваш бюджет на месяц?",100);
time = prompt("Введите дату в формате YYYY-MM-DD",1111-11-11);

let qwestion = prompt( "Введите обязательную статью расходов в этом месяце"); 
let answer = prompt(" Во сколько обойдется?");

let appData = {
    budget : money,
    timaData : time,
    expenses : { qwestion : answer},
    optionalExpenses : {},
    income : [],
    savings : false
};

alert(money/30);
console.log(appData.budget);
console.log(appData.timaData);
console.log(appData.expenses.qwestion);




