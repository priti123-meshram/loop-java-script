// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


let string = "";
var i=1
while(i < 10) {
    var j=1
    while(j <=10-i) {
    string += " ";
    j++
}
var k=1
while(k < 2 * i-1- 1) {
    string += "*";
    k++
  }
  string += "\n";
  i++
}
console.log(string);





