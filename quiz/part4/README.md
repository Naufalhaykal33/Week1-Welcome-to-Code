# Sepaham apakah kalian tentang fungsi? | Part 4

## Soal 1
```js
// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini

function shoutOut() {
    return 'halo parameter'
}

console.log(shoutOut());

// ------------------------------------
console.log('halo parameter')
// ------------------------------------
```

## Soal 2
```js
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

let num1 = 1
let num2 = 2

function calculateMultiply(num1, num2) {
    return num1 * num2
}

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

// ------------------------------------
console.log('')
// -----------------------------------
```
## Soal 3
```js
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini
let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

function processSentence(nama,age,address,hobby) {
    return `Nama saya ${nama}, umur saya ${age},
    alamat saya di ${address}, dan saya punya hobi yaitu ${hobby}` 
}

let fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence); 
// Menampilkan "Nama saya Agus, umur saya 30 tahun, 
// alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
```
---
Materi Function: [Link](../../study-materials/part6.md)