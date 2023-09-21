//Built in Method
// 1. Push
//untuk menambahkan nilai ke dalam array dan untuk mengembalikan panjang array yang baru
const animals = ['chickens','dogs','cats'];
//before use push
console.log(animals);
//output : [ 'chickens', 'dogs', 'cats' ]

animals.push('cows','rabbits') //to add values ​​to the array
//after use push
console.log(animals);
// output : [ 'chickens', 'dogs', 'cats', 'cows', 'rabbits' ]

// 2. shift
//untuk mengambil nilai pertama dalam array lalu menghapus nilai tersebut dari array
//method ini mengubah panjang array
const arrayNum = [1, 2, 3];
//before use shift
console.log(arrayNum);
//output : [1, 2, 3]

const firstElement = arrayNum.shift();
//after use shift
console.log(arrayNum);
// output : [2, 3]
console.log(firstElement);
// output : 1

// 3. isArray
//untuk mengetahui apakah nilai ini bertipe data array atau bukan
console.log(Array.isArray([1, 3, 5]));
// output : true
console.log(Array.isArray("['pizza','burger']"));
// output : false

// 4. includes
//untuk mengetahui apakah array ini berisikan nilai yg di input di dalamnya
//me return true or false
const incArray = [1, 2, 3, 4, 5];
console.log(incArray.includes(2));
//output : true
console.log(incArray.includes(6));
// output : false

// 5. indexOf
//untuk menemukan suatu nilai berada di index ke berapa
//akan menampilkan -1 jika nilai tersebut tidak ada di dalam array
const indOfArray = ['kfc', 'mcd', 'burger king'];
console.log(indOfArray.indexOf('kfc'));
// output : 0
console.log(indOfArray.indexOf('beast burger'));
//output : -1

// 6. concat
//untuk menggabungkan 2 array atau lebih
//method ini tidak mengubah array saat ini tetapi dapat me return array baru
const concArray1 = ['a', 'b', 'c'];
const concArray2 = ['d', 'e', 'f'];
const concArray3 = concArray1.concat(concArray2);
console.log(concArray3);
// output : [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 7. sort
//untuk mensorting nilai di dalam array dengan default ascending
const days = ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//before sorting
console.log(days);
// output : ['Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

days.sort();
//after sorting
console.log(days);
// output : ['Friday', 'Monday', 'Saturday', 'Sunday', 'Thursday', 'Tuesday', 'wednesday']

// 8. pop
//untuk menghapus nilai akhir dari array dan me return nilai tersebut
//method ini mengubah panjang/isi array
const fruits = ['orange', 'apple', 'pineapple', 'water melon', 'banana', 'lemon'];
// before use pop
console.log(fruits);
// output : ['orange', 'apple', 'pineapple', 'water melon', 'banana', 'lemon']

//after use pop
console.log(fruits.pop());
// output : lemon
console.log(fruits);
// output : ['orange', 'apple', 'pineapple', 'water melon', 'banana']

// 9. slice
//me return nilai array dari mulai index ke berapa sampai akhir atau sampai index ke berapa (index terakhir tidak di hitung)
const seaAnimals = ['fish', 'shark', 'whale', 'shrimp', 'starfish'];
console.log(seaAnimals.slice(3));
// output : [ 'shrimp', 'starfish' ]
console.log(seaAnimals.slice(1, 3));
// output : [ 'shark', 'whale' ]

// 10. splice
//untuk menambahkan nilai ke dalam array
//dan untuk menimpa atau menghapus nilai di dalam array
const splArray = ['coca cola', 'sprite', 'fanta'];
splArray.splice(1, 0, 'pepsi')
//insert at index 1
console.log(splArray);
// output : [ 'coca cola', 'pepsi', 'sprite', 'fanta' ]
splArray.splice(3, 1, 'monster energy')
// Replaces 1 element at index 3
console.log(splArray);
// output : [ 'coca cola', 'pepsi', 'monster energy', 'fanta' ]