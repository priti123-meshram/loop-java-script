// let n = 5;
// let string = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);




let n = 5;
let string = "";
let i=0
while (i <=n){
  let j=1
  while (j <=i) {
    string += "*";
    j++
  }string += "\n";
  i++
  
}
console.log(string);