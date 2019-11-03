
// +  - переводим стринг в число
let money = +prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD",1111-11-11);

let appData = {
    budget : money,
    timaData : time,
    expenses : { },
    optionalExpenses : {},
    income : [],
    savings : false
};

for(let i = 0; i < 2; i++){
    let a = prompt( "Введите обязательную статью расходов в этом месяце"); 
    let b = prompt(" Во сколько обойдется?");
    
    //Для свойств, имена которых состоят из нескольких слов, 
    //доступ к значению «через точку» не работает:

    // проверка корректности вопроса и ответа
    if ((typeof(a) === 'string') && (typeof(a) != null && typeof(b) != null)
        && a!='' && b!='' && a.length <50){

        console.log("done");    
//        console.log(b);
        appData.expenses[a] = b;

    } else {
        i--;
        
    }
    
}

appData.moneyPerDay = appData.budget/30;

alert("Ежедневный бюждет: " + appData.moneyPerDay);
if (appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ){
    console.log("Выокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}





