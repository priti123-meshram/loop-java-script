// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);



let string = "";
var i=0;
while (i < 5) {
  var j=0
  while (j < 5 - i) {
    string += "*";
    j++
  }
  string += "\n";
  i++
}
console.log(string);