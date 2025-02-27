// // let pattern = "";
// for (let i = 1; i <= 5; i++) {           // Loop baris
//   for (let j = 1; j <= i; j++) {         // Loop kolom (bintang per baris)
//     pattern += "*";
//   }
//   pattern += "\n";
// }
// console.log(pattern);

let input = 5;
let pattern = "";
let i = 0;

do {
  pattern += "*";
  console.log(pattern);
  i++
} while (i < input);


