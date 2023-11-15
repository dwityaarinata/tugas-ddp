const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0
    },
    {
        "q": "Ibu kota negara malaysia adalah...",
        "o": [
            "Jakarta",
            "kuala lumpur",
            "pangkal pinang",
            "manila",
        ],
        "a": 1 
    },
    {
        "q": "nama guru dari yuji itadori adalah...",
        "o": [
            "yuta okotsu",
            "gojo satoru",
            "nanami",
            "sukuna",
        ],
        "a": 1 
    },
    {
        "q": "kapten dari jkt48 adalah...",
        "o": [
            "gracia",
            "marsha",
            "azizi",
            "shani indira",
        ],
        "a": 3 
    }
];

let nama = prompt('Input nama: ');


// Lengkapi code program yang belum selesai



for (let i = 0; i < soal.length; i++) {
    
    console.log(soal[i].q);
    for (let a = 0; a < soal[i].o.length; a++) {
        console.log((a) + ". " + soal[i].o[a]);
    }
    console.log("\n");
    let jawaban = prompt("Jawaban (0,1,2,3) : ");
    if (jawaban == soal[i].a) {
        jawaban_benar += 1;
        score += point_per_soal;
        console.log("Jawaban benar!");
    } else {
        jawaban_salah+=1;
        console.log("Jawaban salah!");
    
    }

}
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)