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