
let money;
let time;

function start(){
    // +  - переводим стринг в число
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD",1111-11-11);
   
    console.log(money);
    console.log(isNaN(money));

    //isNan == true если не цифры
    while (isNaN(money) || money== "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget : money,
    timaData : time,
    expenses : { },
    optionalExpenses : {},
    income : [],
    savings : false
};

function chooseExpenses(){
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
}

chooseExpenses();

function detectDayBudget(budget){
    let moneyPerDay;
    moneyPerDay = (budget/30).toFixed();
    alert("Ежедневный бюждет: " + moneyPerDay);
    return moneyPerDay;
}

appData.moneyPerDay = detectDayBudget(appData.budget) ;
//appData.moneyPerDay = (appData.budget/30).toFixed();

//alert("Ежедневный бюждет: " + appData.moneyPerDay);
function detectLevel(){
    if (appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000 ){
        console.log("Выокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();


function chooseOptExpenses(){
    for(let i=0; i<3; i++){
        let a = prompt( "Статья необязательных расходов?"); 
     
        //Для свойств, имена которых состоят из нескольких слов, 
        //доступ к значению «через точку» не работает:

        // проверка корректности вопроса и ответа
        if ((typeof(a) === 'string') && (typeof(a) != null )
            && a!=''  && a.length <50){

            console.log("done");    
    //        console.log(b);
            appData.optionalExpenses[i] = a;
            
        } else {
            i--;
        }
    } 
    
}

chooseOptExpenses();
console.log(appData.optionalExpenses);






