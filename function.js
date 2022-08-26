function troubleshooting(){
    a = 1
    b = 2
    return "the result is "+(a+b)
}
console.log(troubleshooting())
var number = 10
function numberchecker(){
    if(number>=10){
        return "true"
    }
    else
    return "false"
}
console.log(numberchecker())
a = 2001
b = 2022
var c = "waleed"
var d = "Ahmed"
console.log("my name is "+c+" "+d+" and i was born in "+a+" i am 21 years old because the year is "+b)
// function
// lets make a function where we input a number and it returns that number and adds it to 7
function add(){
    a=7
    return (a+7)
}
console.log(add())
//another way of doing it
function add1(a){
    return (a+7)
}
console.log(add1(40))
function multiply(){
    a = 7
    b = 7
    return (a*b)
}
console.log(multiply())
// another way of doing it
function multiply1(a,b){
    return (a*b)
}
console.log(multiply1(a,b))
// function that makes the first letter of a string capital
function capitalize(a,b){
    a="waleed"
    b = a.charAt(0).toUpperCase()+a.slice(1,6)
    return b
}
console.log(capitalize(a,b))
// function that returns the last letter of a string
function Lastletter(a,b){
    a = "abcd"
    b = a.slice(3)
    return b
}
console.log(Lastletter(a,b))
// function that makes the last letter of the string capital
function capital(a,b){
    a = "waleed"
    b = a.slice(0,5)+a.charAt(5).toUpperCase()
    return b
}
console.log(capital(a,b))