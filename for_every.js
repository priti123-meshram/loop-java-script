const ages = [32, 33,40,89];

a=ages.every(b)

function b(age) {
  return age > 18;
}
console.log(a)







// const survey = [
//   { name: "Steve", answer: "Yes"},
//   { name: "Jessica", answer: "Yes"},
//   { name: "Peter", answer: "Yes"},
//   { name: "Elaine", answer: "No"}
// ];

// let result = survey.every(a);

// function a(el, index, arr) {
//   if (index === 0) {
//     return true;
//   } else {
//     return (el.answer === arr[index - 1].answer);
//   }
// }
// console.log(result)