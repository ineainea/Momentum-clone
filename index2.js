function sayHello(name, age){
    console.log('Hello!',name, "you have", age, "years of age.");
}

sayHello("Nicolas", 15);

function sayhello2(name, age) {
    return `Hello ${name} you are ${age} years of old.`;
}

const greetNicolas = sayhello2("Nicolas", 14)

console.log(greetNicolas)

const calculator = {
    plus: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    multi: function(a,b){
        return a*b;
    },
    devide:function(a,b){
        return a/b;
    },
    power: function(a,b){
        return a**b;
    }
}

const result1 = {
    addition: calculator.plus(10, 5),
    subtraction: calculator.minus(10, 5),
    multiplication: calculator.multi(10, 5),
    division: calculator.devide(10, 5),
    involution: calculator.power(10, 5)
}
console.log(result1)


var num1=1;
var num2=2;
var result=3;

var string1 = num1 + '더하기' + num2 + '는' + result + '이다.'
console.log(string1);

var string2 = `${num1}더하기${num2}는${result}이다.`
console.log(string2);




/* sayHello("Nicolas"); 에서 "Nocolas"는 함수 sayhello의 인자(argument)임. */

/* function sayHello(potato){
    console.log('Hello!',potato);
} 에서 potato라는 인자 값을 넣고 potato라는 자리를 만들어서 그 안에 "Nicolas" 라는 새로운 인자 값을 넣어 출력하게 함. */