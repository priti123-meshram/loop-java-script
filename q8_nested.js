let string = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < 2 * (5-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);






// let string = "";
// var i=0
// while(i < 5) {
//     var j=0
//     while(j < i) {
//     string += " ";
//     j++
// }
// var k=0 
// while(k < 2 * (5-i) - 1) {
//     string += "*";
//     k++
//   }
//   string += "\n";
//   i++
// }
// console.log(string);




