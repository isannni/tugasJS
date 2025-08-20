// 1. VARIABLE
console.log("1. VARIABLE");
console.log("-----------");

// var (function scope) - tidak disarankan
var namaLengkap = "Ikhsan";

// let (block scope) - bisa diubah
let umur = 21;
let kota = "Tegal";

// const (block scope) - tidak bisa diubah
const negara = "Indonesia";
const gender = "Laki-Laki";

console.log("Nama:", namaLengkap);
console.log("Umur:", umur);
console.log("Kota:", kota);
console.log("Negara:", negara);
console.log("Gender:", gender);

// Mengubah nilai variable
umur = 26;
kota = "Bandung";
console.log("Umur setelah diubah:", umur);
console.log("Kota setelah diubah:", kota);
console.log();

// 2. TIPE DATA
console.log("2. TIPE DATA");
console.log("------------");

// Primitive Data Types
let angka = 42;                    // Number
let desimal = 3.14;               // Number
let teks = "Hello World";         // String
let benar = true;                 // Boolean
let salah = false;                // Boolean
let kosong = null;                // Null
let tidakTerdefinisi;             // Undefined

// Non-primitive Data Types
let array = [1, 2, 3, "empat"];   // Array
let objek = {                     // Object
    nama: "Alice",
    umur: 30,
    hobi: ["membaca", "coding"]
};

console.log("Number:", angka, "- Type:", typeof angka);
console.log("Decimal:", desimal, "- Type:", typeof desimal);
console.log("String:", teks, "- Type:", typeof teks);
console.log("Boolean:", benar, "- Type:", typeof benar);
console.log("Null:", kosong, "- Type:", typeof kosong);
console.log("Undefined:", tidakTerdefinisi, "- Type:", typeof tidakTerdefinisi);
console.log("Array:", array, "- Type:", typeof array);
console.log("Object:", objek, "- Type:", typeof objek);
console.log();

// 3. OPERATOR
console.log("3. OPERATOR");
console.log("----------");

let a = 10;
let b = 3;

// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log(`${a} + ${b} = ${a + b}`);  // Penjumlahan
console.log(`${a} - ${b} = ${a - b}`);  // Pengurangan
console.log(`${a} * ${b} = ${a * b}`);  // Perkalian
console.log(`${a} / ${b} = ${a / b}`);  // Pembagian
console.log(`${a} % ${b} = ${a % b}`);  // Modulus
console.log(`${a} ** ${b} = ${a ** b}`); // Pangkat

// Comparison Operators
console.log("\nComparison Operators:");
console.log(`${a} == ${b}: ${a == b}`);   // Equal
console.log(`${a} != ${b}: ${a != b}`);   // Not equal
console.log(`${a} > ${b}: ${a > b}`);     // Greater than
console.log(`${a} < ${b}: ${a < b}`);     // Less than
console.log(`${a} >= ${b}: ${a >= b}`);   // Greater than or equal
console.log(`${a} <= ${b}: ${a <= b}`);   // Less than or equal

// Logical Operators
let x = true;
let y = false;
console.log("\nLogical Operators:");
console.log(`${x} && ${y}: ${x && y}`);   // AND
console.log(`${x} || ${y}: ${x || y}`);   // OR
console.log(`!${x}: ${!x}`);              // NOT
console.log();


// 4. IF/ELSE
console.log("4. IF/ELSE");
console.log("---------");

let nilai = 85;

if (nilai >= 90) {
    console.log("Grade: A - Excellent!");
} else if (nilai >= 80) {
    console.log("Grade: B - Good!");
} else if (nilai >= 70) {
    console.log("Grade: C - Average");
} else if (nilai >= 60) {
    console.log("Grade: D - Below Average");
} else {
    console.log("Grade: F - Fail");
}

// Ternary Operator
let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log(`Status: ${status}`);
console.log();

// 5. SWITCH
console.log("5. SWITCH");
console.log("--------");

let hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari tidak valid";
}

console.log(`Hari ke-${hari}: ${namaHari}`);
console.log();


// 6. FOR & WHILE LOOP
console.log("6. FOR & WHILE LOOP");
console.log("------------------");

// For Loop
console.log("For Loop (1-5):");
for (let i = 1; i <= 5; i++) {
    console.log(`Iterasi ${i}`);
}

// For...of Loop (untuk array)
console.log("\nFor...of Loop:");
let buah = ["apel", "mangga", "pisang", "jeruk"];
for (let item of buah) {
    console.log(`Buah: ${item}`);
}

// For...in Loop (untuk object)
console.log("\nFor...in Loop:");
let mahasiswa = { nama: "Budi", umur: 20, jurusan: "Informatika" };
for (let key in mahasiswa) {
    console.log(`${key}: ${mahasiswa[key]}`);
}

// While Loop
console.log("\nWhile Loop (countdown 5-1):");
let countdown = 5;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// Do...While Loop
console.log("\nDo...While Loop:");
let counter = 1;
do {
    console.log(`Counter: ${counter}`);
    counter++;
} while (counter <= 3);
console.log();

// 7. FUNCTION
console.log("7. FUNCTION");
console.log("----------");

// Function Declaration
function salam(nama) {
    return `Halo, ${nama}! Selamat datang!`;
}

// Function Expression
const tambah = function(a, b) {
    return a + b;
};

// Arrow Function
const kali = (a, b) => a * b;

// Function dengan default parameter
const perkenalan = (nama, umur = 20) => {
    return `Saya ${nama}, umur ${umur} tahun.`;
};

console.log(salam("Alice"));
console.log("5 + 3 =", tambah(5, 3));
console.log("4 x 6 =", kali(4, 6));
console.log(perkenalan("Bob"));
console.log(perkenalan("Charlie", 25));
console.log();

// 8. PROMISE
console.log("8. PROMISE");
console.log("---------");

// Membuat Promise
function ambilData(berhasil = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (berhasil) {
                resolve("Data berhasil diambil!");
            } else {
                reject("Gagal mengambil data!");
            }
        }, 1000);
    });
}

// Menggunakan Promise dengan .then() dan .catch()
console.log("Mengambil data...");
ambilData(true)
    .then(result => {
        console.log("Success:", result);  
    })
    .catch(error => {
        console.log("Error:", error);
    });

// 9. ASYNC/AWAIT
console.log("\n9. ASYNC/AWAIT");
console.log("--------------");

// Async Function
async function prosesData() {
    try {
        console.log("Memulai proses async...");
        const hasil1 = await ambilData(true);
        console.log("Hasil 1:", hasil1);
        
        const hasil2 = await ambilData(true);
        console.log("Hasil 2:", hasil2);
        
        return "Semua proses selesai!";
    } catch (error) {
        console.log("Error dalam async:", error);
        throw error;
    }
}

// Menjalankan async function
prosesData()
    .then(result => console.log("Final:", result))
    .catch(error => console.log("Final Error:", error));


// 10. TRY/CATCH
console.log("\n10. TRY/CATCH");
console.log("-------------");

// Basic try/catch
function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Tidak bisa membagi dengan nol!");
        }
        return a / b;
    } catch (error) {
        console.log("Error occurred:", error.message);
        return null;
    } finally {
        console.log("Operasi pembagian selesai (finally block)");
    }
}

console.log("10 / 2 =", bagi(10, 2));
console.log("10 / 0 =", bagi(10, 0));

// Try/catch dengan JSON parsing
function parseJSON(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        console.log("JSON parsed successfully:", data);
        return data;
    } catch (error) {
        console.log("Invalid JSON:", error.message);
        return null;
    }
}

parseJSON('{"nama": "John", "umur": 30}');  // Valid JSON
parseJSON('{nama: "John", umur: 30}');      // Invalid JSON

// ASYNC TRY/CATCH EXAMPLE
async function contohAsyncTryCatch() {
    try {
        console.log("\nAsync Try/Catch Example:");
        const data = await ambilData(false); // Akan gagal
        console.log("Data:", data);
    } catch (error) {
        console.log("Caught async error:", error);
    }
}

setTimeout(contohAsyncTryCatch, 2000);

console.log("\n=== PEMBELAJARAN JAVASCRIPT SELESAI ===");
console.log("Jalankan file ini untuk melihat semua contoh bekerja!");