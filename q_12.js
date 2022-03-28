// var n=require("readline-sync");
// var sum=0
// for(i=1; i<=10; i++){
//     const a=n.questionInt("enter number: ");
//     sum=sum+a
//     console.log(sum)
// }



// var n=require("readline-sync");
// const num=n.questionInt("enter number: ");
// var sum=0
// var i=0
// while(i<num){
//     const a=n.questionInt("enter the num")
//     sum=a+sum
//     console.log(sum)
//     i++
// }


var n=require("readline-sync");
const num=n.questionInt("enter number: ");
var sum=0
var i=0
do{
    const a=n.questionInt("enter the num")
    sum=a+sum
    console.log(sum)
    i++
}
while(i<num)
