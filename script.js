// "a"

// DERS 2 : DEĞİŞKENLER +++++++++++++++++++++++++++++++++++++++++++++++++

// var age;
// console.log(age);

// age = 20;
// console.log(age);

// var fullname = "ceren efe";
// console.log(fullname);

// var fullname = "alara efe";
// console.log(fullname);

// Değişken Tanımlama Kuralları

// Sayısal ifade ile başlayamaz örneğin 1sayi olmaz sayi1 olur

// var sayi1;
// var _sayi2;
// var $sayi3;

// Komut isimleri ile tanımlama yapılmaz. var for ya da var switch gibi..

// Birden fazla kelime

// var ad = "ceren";
// var soyad = "efe";

// var ad_soyad = "Ceren Efe";
// var adSoyad = "Ceren Efe";

// Case Sentive (Büyük küçük harf duyarlılığı)

// var firstName = "Ceren";
// var FirstName = "Efe";

// console.log(firstName);
// console.log(FirstName);

// var, let, const

// let city = "Kocaeli";
// console.log(city);

//var email = "abc@gmail.com";
//console.log(email);

//email = "def@gmail.com";
//console.log(email);

// const email = "def@gmail.com";
// console.log(email);

// email = "def@gmail.com";
// console.log(email);

// const değer sabit olsun ve hiç değişmesin diye var.


// DERS 3 : DEĞİŞKEN TİPLERİ +++++++++++++++++++++++++++++++++++++++++++++++++

// 1- Primitive Types ----------------------

// String

// let firstName = "Ceren";
// console.log(typeof firstName);

// Number 

// let age = 20;
// console.log(typeof age);

// let money = 100.05;
// console.log(typeof money);

//boolean

// let isActive = true;
// console.log(typeof isActive);

// null

// let job = null;
// console.log(typeof job);


// undefined (tanımlanmamış)

// let car;
// console.log(typeof car);


// 2- Reference Types = Objects ----------------------

//object
// array

// let names = ['ceren', 'efe', 'ali'];
// console.log(typeof names);

// // function

// var calculateAge = function() {
//     return 0;
// };

// console.log(typeof calculateAge);

// DERS 4 : TÜR DÖNÜŞÜMÜ +++++++++++++++++++++++++++++++++++++++++++++++++

// örnek 1 --------

// let num1 = '5';
// console.log(typeof num1);

// let num2 = '5';
// let num3 = '10';

// console.log(num2 + num3);

// // örnek 2 --------

// let sayi1 = Number('2');
// let sayi2 = Number('2');

// let total = sayi1+sayi2;

// console.log(total);
// console.log(typeof total);

// Number to string

// let val;
// val = String(100);

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// // arry to string

// let abc;
// abc = String([1,2,3,4]);

// console.log(abc);
// console.log(typeof abc);
// console.log(abc.length);

// //toString

// val = (10).toString();

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

//string to number

// val = Number('10');

// console.log(val);
// console.log(typeof val);
// console.log(val.length);
//length sadece stringlere özgü 

//parseInt
//parseFloat

// val = parseInt('10');          // örnek 1 -----

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = parseInt('10.5');        // örnek 1 -----

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));

// val = parseFloat('10.5');      // örnek 1 -----

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));


// DERS 5 : DEĞİŞKEN UYGULAMLARI (ÖRNEKLER) +++++++++++++++++++++++++++++++++++++++++++++++++

// var customerName = 'arzu';
// console.log(customerName);

// var customerSurname = 'kaya';
// console.log(customerSurname);

// var customerId = '11111111111';
// console.log(customerId);

// var order1 = 100;
// var order2 = 150;
// var total = order1+order2;
// console.log(total);

// var gender = 'kadın';
// console.log(gender);

// var address ={
//     city : 'kocaeli',
//     district : 'izmit',
//     body : 'abc sokak. no:45'
// }
// console.log(address);

// var hobbies = ['dizi', 'film', 'kitap'];
// console.log(hobbies);



// DERS 6 : OPERATÖRLER +++++++++++++++++++++++++++++++++++++++++++++++++

// Operatörler

// let val;
// const a = 10;
// const b = 2;
// const c = 2;

// 1- Arimatik Operatörler

// val = a + b;
// val = a - b;
// val = a * b;
// val = a / b;
// val = a % b;

// 2- Atama Operatörler

// val = a;
// val +=a;
// val *=a;
// val +=a;

// 3- Karşılaştırma Operatörler

// val = a==b;
// val = b==c;
// val = b===c;
// val = '5'===5;
// val = '5'==5;
// val = a!=b;
// val = a > b;
// val = 5 > 5;
// val = 5 >= 5;

// 4- Mantıksal Operatörler

// && (and)

// || (or)

// ! (not)

// console.log(val);
// console.log(typeof val);


// DERS 7 : OPERATÖRLER ÖRNEK UYGULAMA +++++++++++++++++++++++++++++++++++++++++++++++++

// let indexCan;
// let indexAda;

// const kgCan = 60;
// const kgAda = 40;

// const heightCan = 1.70;
// const heightAda = 1.50;

// indexCan = (kgCan) / (heightCan * heightCan);
// indexAda = (kgAda) / (heightAda * heightAda);

// console.log(indexCan.toFixed(), indexAda.toFixed());


// DERS 8 : DATES & TIMES +++++++++++++++++++++++++++++++++++++++++++++++++

// data object

// let d = new Date;

// set methods

// d.setFullYear(2020);
// d.setDate(15);
// d.setHours(12);
// d.setSeconds(20);



//get methods

// console.log(d.getDate());
// console.log(d.getFullYear());
// console.log(d.getDay());
// console.log(d.getHours());
// console.log(d.getSeconds());


// console.log(d);
// console.log(typeof d);


// DERS 9 : DATES & TIMES UYGULAMALARI +++++++++++++++++++++++++++++++++++++++++++++++++

// let dt = new Date;

// console.log(dt);
// console.log(dt.getDay());
// console.log(dt.getMonth());
// console.log(dt.getFullYear());

// var dtA = new Date('8/7/2010 23:01:17');
// var dtB = new Date(2010,7,8,23,1,7);

// console.log(dtA);
// console.log(dtB);

// // örnek 2

// var dtC = new Date('1/1/1999');
// var dayOfMonts = dtC.getDate();
// dtC.setDate(dayOfMonts -1 );

// console.log(dtC);


// DERS 10 : STRINGS +++++++++++++++++++++++++++++++++++++++++++++++++

// const firstName = 'ceren';
// const surName = 'efe';
// const age = 23;
// let val;

// string concatenation

// val = firstName + ' ' + surName;
// val = 'benim adım' + ' ' + firstName + ' ' + surName + ' ve yaşım ' + age + ' izmit\'te yaşıyorum';

// string concat
// val = firstName.concat(' ',surName);

// // string length
// //val = val.length;

// // string uppercase - lowercase
// val = val.toUpperCase();
// val = val.toLowerCase();

// //val = val[4];
// val = val.indexOf('e');

// console.log(val);
// console.log(typeof val);




// DERS 11 : ARRAYS +++++++++++++++++++++++++++++++++++++++++++++++++


// let names = ['ceren','çınar','gül','oğuz'];
// let years = [2000, 2001,2002,2003];
// let mix = ['ceren', 'efe', 2001, null, undefined, ['sinema','kitap']];


// // get array item
// console.log(names[0]);
// console.log(mix[2]);

// // set array item
// names[0] = 'cemre';
// names[4] = 'emel';

// //
// console.log(names[0]);
// //


// console.log(names);
// console.log(typeof names);
// console.log(names.length);

// console.log(years);
// console.log(mix);


// DERS 12 : IF / ELSE +++++++++++++++++++++++++++++++++++++++++++++++++


// const firstName = 'sena';
// const age = 19;
// const isStudent = false;
// const school = 'university';

// if (firstName === 'sena'){
//     console.log('Merhaba Sena');
// }

// if (age === 19){
//     console.log('Yaşınız 19');
// }

// if (isStudent){
//     console.log('Evet Öğrencisiniz')
// }else{
//     console.log('Öğrenci falan değilsiniz');
// }

// if (age>= 18){
//     console.log('ehliyet alabilirsiniz');
// } else {
//     console.log('büyü de gel');
// }

// // undefined

// let id = '16376383';

// if (typeof id !== 'undefined'){
//     console.log('id: '+id);
// } else {
//     console.log('no id');
// }


// DERS 13 : IF / ELSE - SWİTCH STATEMENTS +++++++++++++++++++++++++++++++++++++++++++++++++

// switch statements

// let categoriy = 'beyaz eşya';

// switch(categoriy){

//     case 'telefon':
//         console.log('telefon kategorisi');
//     break;
    
//     case 'bilgisayar':
//         console.log('bilgisayar kategorisi');
//     break;

//     default:
//         console.log('yanlış kategori');
// }


// let day;

// switch (new Date().getDay()){
//     case 0:
//     case 6:
//         day = 'Hafta sonu';
//         break;
        
//     case 1:
//     case 2: 
//     case 3:
//     case 4: 
//     case 5: 
//         day = 'Hafta içi';
//         break;
// }

// console.log('Bugün ' + day);


// const age = 19;
// const firstName = 'sena';

// switch(true){
//     case age >= 0 && age <= 12:
//         console.log(firstName + ' çocuk');
//     break;
    
//     case age >= 13 && age <= 19:
//         console.log(firstName + ' ergen');
//     break;

//     default:
//         console.log(firstName + ' yetişkin');
// }


// DERS 14 : KOŞULLU DURUM UYGULAMASI +++++++++++++++++++++++++++++++++++++++++++++++++

var result = prompt('who\'s there ?');

if (result == 'cancel'){
    console.log('cancelled');
}else if (result == 'admin'){
    
    var password = prompt('enter your password: ');

    if(password == 'cancel'){
        console.log('cancelled');    
    }else if(password == '1234'){
        console.log('welcome admin');
    }
}else{
    console.log('seni tanımıyorum');
}


