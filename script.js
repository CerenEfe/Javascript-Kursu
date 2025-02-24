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

// var result = prompt('who\'s there ?');

// if (result == 'cancel'){
//     console.log('cancelled');
// }else if (result == 'admin'){
    
//     var password = prompt('enter your password: ');

//     if(password == 'cancel'){
//         console.log('cancelled');    
//     }else if(password == '1234'){
//         console.log('welcome admin');
//     }
// }else{
//     console.log('seni tanımıyorum');
// }


// DERS 15 : OBJECT +++++++++++++++++++++++++++++++++++++++++++++++++

// object literals

// let val;

// let person = {
//     firstName : 'ceren',
//     lastName : 'efe',
//     age : 7,
//     hobbies : ['music', 'book'],
//     address : {
//         city : 'kocaeli',
//         country : 'türkiye'
//     },
//     getBirthYear : function(){
//         return 2018 - this.age;
//     }
// };

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.hobbies.length;
// val = person.address;
// val = person.address.city;
// val = person.address['city'];
// val = person.getBirthYear();


// console.log(val);
// console.log(typeof person);

// // örnek 2

// let people = [
//                      {firstName : 'ceren', lastName : 'efe'},
//                      {firstName : 'ali', lastName : 'turan'},
//                      {firstName : 'veli', lastName : 'kaya'},
//             ];

// val = people;
// val = people[2];
// val = people[1].firstName;

// console.log(val);
// console.log(typeof people);



// DERS 16 : DÖNGÜLER +++++++++++++++++++++++++++++++++++++++++++++++++

// döngüler - loops

// 1-) for döngüsü

// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// örnek 1

// for(let i=0; i<=10; i++){

//     if(i == 3){
//         console.log('en sevdiğim sayı: '+i)
//         continue;
//     }

//     if(i == 6){
//         console.log('en sevmediğim sayı: 6')
//         break;
//     }
//     console.log(i);
// }


// 2-) while döngüsü


// örnek 2

// let i =0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// 3-) do-while döngüsü

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<10)


// DERS 17 : DÖNGÜLER UYGULAMALI ÖRNEK +++++++++++++++++++++++++++++++++++++++++++++++++

// var hak = 5;
// var tahmin;
// var sayi = Math.floor((Math.random()*10)+1);

// console.log(sayi);

// while(hak>0){
//     hak--;
//     tahmin = Number(prompt('bir sayı giriniz'));

//     if(sayi == tahmin){
//         console.log('tebrikler bildiniz');
//         break;
//     }else if(sayi > tahmin){
//         console.log('yukarı');
//     }else{
//         console.log('aşağı');
//     }

//     if(hak == 0){
//         console.log('hakkınız bitti');
//     }
// }


// DERS 18 : FONKSİYONLAR +++++++++++++++++++++++++++++++++++++++++++++++++

// örnek 1

// function yasHesapla(doğumYili){
//     return 2018 - doğumYili;
// }

// let ageAda = yasHesapla(2010);
// let ageCeren = yasHesapla(2000);
// let ageHakan = yasHesapla(2017);

// console.log(ageAda);
// console.log(ageCeren);
// console.log(ageHakan);

// // örnek 2

// function EmekligeKacYilKaldi(doğumYili,isim){
//     let yas = yasHesapla(doğumYili);
//     let emeklilik = 65 - yas;

//     if(emeklilik>0){
        
//         console.log(isim + ' emekli olmana ' + emeklilik + ' yıl kaldı');

//     }else {
//         console.log('zaten emeklisiniz');
//     }
// }

// EmekligeKacYilKaldi(2012,'ada');
// EmekligeKacYilKaldi(2010,'ceren');
// EmekligeKacYilKaldi(1950,'hakan');


// DERS 19 : DOCUMENT OBJECT MODEL (DOM) +++++++++++++++++++++++++++++++++++++++++++++++++

// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[2];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.scripts;
// val = document.scripts.length;
// val = document.scripts[0];
// val = document.scripts[0].getAttribute('src');


// console.log(val);


// DERS 20 : DOM TANIYALIM +++++++++++++++++++++++++++++++++++++++++++++++++

// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[12];
// val = document.head;
// val = document.body;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');


// console.log(val);


// DERS 21 : TEKİL ELEMENT SEÇİMİ +++++++++++++++++++++++++++++++++++++++++++++++++

// Selecting Elements

// *** Single Elements (tekli element seçerken aşağıdaki 2 seçeneği kullanabiliyoruz)

// 1- document.getElementById()
// 2- document.querySelector()

// let val;

// val = document.getElementById('header'); 
// val = document.getElementById('header').id;
// val = document.getElementById('header').className;

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;

// val.style.fontSize = '45px';
// val.style.color = 'red';
// val.style.fontWeight = 'bold';
// // val.style.display='none';

// document.getElementById('header').innerText = 'My To Do App';

// document.getElementById('header').innerText = '<b>My To Do App</b>';

// document.getElementById('header').innerHTML = '<b>My To Do App</b>';


// console.log(val);


// ----2.kısım----
// document.querySelector()

// console.log(document.querySelector('#header'));
// console.log(document.querySelector('.card-header'));

// document.querySelector('li').style.color= 'red';
// document.querySelector('li:last-child').style.color= 'blue';
// document.querySelector('li:nth-child(2)').style.color= 'yellow';
// document.querySelector('li:nth-child(3)').textContent ='Task item';

// // document.querySelector('li').className = 'ist-group-item list-group-item-primary';

// document.querySelector('li').classList.add('active');

// DERS 22 : ÇOKLU ELEMENT SEÇİMİ +++++++++++++++++++++++++++++++++++++++++++++++++


// *** Multiple Elements

// class name
// document.getElementsByClassName()

// let val;

// val = document.getElementsByClassName('list-group-item');

// // val = document.getElementsByClassName('list-group-item')[2];

// // val = val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }


// console.log(val);


// let val;

// // val = document.getElementsByTagName('li');
// // val = document.getElementById('task-list');
// // val = val.getElementsByTagName('a');


// // document.querySelectorAll()

// val = document.querySelectorAll('li');

// console.log(val);


// DERS 23 : ELEMENTLER ÜZERİNDE GEZİNME +++++++++++++++++++++++++++++++++++++++++++++++++


// let val;

// let list = document.querySelector('.list-group');
// val = list;
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;  //Text
// val = list.childNodes[1].nodeType;  //Element

// val = list.children;
// val = list.children[0];
// val = list.children[2];

// val = list.children[2].textContent ='new item';
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;


//console.log(val);


// DERS 24 : DOM ELEMENTLERİNİ OLUŞTURMA +++++++++++++++++++++++++++++++++++++++++++++++++

// creat element

// const li = document.createElement('li');

// // add class
// li.className ='list-group-item list-group-item-secondary';

// // attribute
// li.setAttribute('title','new title');
// li.setAttribute('data-id','5');

// // text node
// const text = document.createTextNode('new item');
// li.appendChild(text);

// const a = document.createElement('a');
// a.setAttribute('href','#');
// a.className='delete-item float-right';
// a.innerHTML ='<i class="fas fa-times"></i>';

// li.appendChild(a);  //append a to li

// // append li to ul
// document.querySelector('#task-list').appendChild(li);

// //document.getElementById('task-list').appendChild(li);

// console.log(li);


// DERS 25 : DOM ELEMENTLERİNİ SİLME +++++++++++++++++++++++++++++++++++++++++++++++++

// const taskList = document.querySelector('#task-list');

// ** removing element
// taskList.remove();
// taskList.childNodes[1].remove();
// taskList.children[0].remove();

// removing attribute
// taskList.children[1].removeAttribute('class');

// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }


// ** replacing elements
// const cardHeader = document.querySelector('.card-header');

// // create element
// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'));

// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);

// ** Classes

// let val;

// link = taskList.children[0].children[0];

// // val = link.className;
// // val = link.classList;
// // val = link.classList[0];
// // val = link.classList[1];

// link.classList.add('new');
// link.classList.remove('new');

// // Attribues
// val = link.getAttribute('data-id');
// val = link.getAttribute('href');
// val = link.setAttribute('href','http://cerenefe.com');
// val = link.hasAttribute('data-val');

// console.log(val);


// DERS 26 : EVENT LİSTENERS +++++++++++++++++++++++++++++++++++++++++++++++++

 const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');

  btn.addEventListener('click',function(e){
      
    let val;

    val = e;

    val = e.target;
    val = e.target.id;
    val = e.target.classList;
    val = e.type;

    console.log(val);

    e.preventDefault();
  });

// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

//  function btnClick(){
//     console.log('btn clicked');
//  }

//  function btnClick2(){
//     console.log('btn 2 clicked');
//  }










