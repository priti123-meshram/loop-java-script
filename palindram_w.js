// let n=require("re");
let n=require("readline-sync")
var a= n.question("enter the palimd");
var i=(a);
var rev=0
while (i>0){
    remainder=i%10
    i/=10
    i=Math.floor(i)
    rev=rev*10+remainder
}
if (a===rev){
    console.log("it is palindrome")
}
else{
    console.log("it is not palindrome")

}