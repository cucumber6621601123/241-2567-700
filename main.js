/*
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ
<= น้อยกว่าหรือเท่ากับ


let number1 = 5;
let number2 = 5;

let condition1 = number1 >= number2; //Boolean ค่าที่ได้จะเป็น true หรือ false
console.log('result of condition is', condition1);
*/

/*
>= 80 เกรด A
>= 70 เกรด B
>= 60 เกรด C
>= 50 เกรด D
*/
 /*
let score = prompt('Enter your score: '); //รับค่าจากผู้ใช้
console.log('Your score is', score);

//if - else condition

if (score >= 80) {
    console.log('You are grad A');
} 
else if (score >= 70) {
    console.log('You are grad B');      
}
else if (score >= 60) {
    console.log('You are grad C');      
}
else if (score >= 50) {
    console.log('You are grad D');
}
else {  
    console.log('You are grad F');
}
*/

/*
&& และ
|| หรือ
! Not is ไม่
*/
/*
let number1 = 5;
let number2 = 8;
//true && true = true
//true && false = false
//true || true = true
//false || false = false
// หรือ || อยากใดอย่างนึงเป็น true จะเป็น true
let condition1 = !(number1 >= 3 || number2 >= 10) ;
console.log('result of condition is', condition1);


let age = 30;
let gender = 'male';

//true && true = true
if (age >= 20 && gender == 'male') {
    console.log('You are male adult');
}
*/
/*
let number = 25 ;

if (!(number % 2 == 0)) {
    console.log('You are even number'); //เพราะใส่ ! ค่าจึงกลายเป็นตรงข้าม
}
    */

/*
while loop
for loop
*/

/*
let counter = 0 ;
//เงื่อนไขต้องเป็นจริง while จะทำงาน
while (counter < 10) { 
    console.log('while loop');
    counter = counter + 1;
}

for (let counter = 0; counter < 10; counter++) {
    console.log('for loop');
}
*/

/*
Array
*/

/*
let scores = [10,20,30,40,50,60,70,80,90,100]; //Array สร้างตัวแปรเก็บข้อมูลหลายๆตัว
for (let index = 0; index < scores.length; index++) {
    console.log('score',scores[index]);
}
/*
scores[0] =scores[0] * 2; //เปลี่ยนค่าใน Array
scores[1] =scores[1] * 2;
scores[2] =scores[2] * 2;
scores[3] =scores[3] * 2;
scores[4] =scores[4] * 2;
*/
/*
scores = scores.map((s) => //เปลี่ยนค่าใน Array โดยใช้ map
{
    return s * 2;
}); 

scores.forEach((s) => //การทำงานเหมือนกับ for loop
{
    console.log('score :',s);
}) */
/*
let scores = [10,20,30,40];
//let newScores = []

for (let index = 0; index < scores.length; index++) {
    console.log('Score',scores[index]);
    /*
    if (scores[index] >= 30) {
        newScores.push(scores[index]); //ถ้าตัวแปรไหนมีค่า >= 30 จะเก็บไว้ใน newScores
    }
        */
       /*
}

let newScores = scores.filter((s) => //filter จะเข้าไปเช็คใน Array แล้วเอาข้อมูลที่ตรงเงื่อนไขไปเก็บไว้ใน newScores
    {
   return s >= 20;
});

newScores.forEach((ns) => {
    console.log('New score',ns);
})

/*
let age1 = 20;
let age2 = 30;
let age3 = 40;
let age4 = 50;
console.log(age1, age2, age3, age4);

let ages = [20, 30, 40]; //Array สร้างตัวแปรเก็บข้อมูลหลายๆตัว
console.log('new age',ages[2]);
console.log('age list',ages); 

//แทนที่ค่า
ages = [45,50] ;
console.log('new age',ages);

//ต่อ Array
ages.push(55); //เพิ่มข้อมูลต่อท้าย
console.log('new age',ages);

ages.pop(); //ลบข้อมูลตัวสุดท้าย
console.log('new age',ages);
*/

/*
let ages = [90,60,40,45,50];
console.log(ages);
ages.sort(); //เรียงข้อมูลจากน้อยไปมาก
console.log(ages);

let = names_list = ['John','bob','alice','jane'];
console.log(names_list);
names_list.push('mike');
console.log(names_list);
console.log(names_list.length); //นับจำนวนข้อมูลใน Array
console.log(names_list[2]); //เรียกข้อมูลใน Array
for (let index = 0; index < names_list.length; index++) {
    console.log('name list',names_list[index]);
}
*/

/*
object
*/
/*
let student = [{ //เก็บข้อมูลหลายๆตัว
    name: 'Gorfern',
    age: 90,
    grade :'A'
}, {
    name: 'Godji',
    age: 66,
    grade: 'B'
}];

student.push({ //เพิ่มข้อมูล
    name: 'Jennie',
    age: 65,
    grade: 'C'
});

student.pop(); //ลบข้อมูลตัวสุดท้าย
console.log(student);

for (let index = 0; index < student.length; index++) //เรียกข้อมูลใน Student
    {
    console.log('Student number',(index+1)); 
    console.log(student[index].name);
    console.log('age',student[index].age);
    console.log('grade',student[index].grade);
}
    */

/*
object + array
*/

/*
let score1 = 50 
let score2 = 90 
let grads = '' //ประกาศค่าว่าง
//ประกาศ function ชื่อ calculateGrade  ที่มี parameter เป็น score
function calculateGrade(score) {
    if (score >= 80) {
        grads = 'A';
    }
    else if (score >= 70) {
        grads = 'B';
    }
    else if (score >= 60) {
        grads = 'C';
    }
    else if (score >= 50) {
        grads = 'D';
    }
    else {
        grads = 'F';
    }   
    return grads; //return ค่าที่ได้จากการเข้าเงื่อนไข
}
let student1 = calculateGrade(score1); //เรียกใช้ function โดยใส่ค่า score1
let student2 = calculateGrade(score2); //เรียกใช้ function โดยใส่ค่า score2
console.log('grads',score1,student1); 
console.log('grads',score2,student2); 
//แสดงค่าที่ได้จากการเข้าเงื่อนไข
*/

let students = [
    {
        name: 'Gorfern',
        age : 43,
        grade: 'A',
        score: 90
    },
    {
        name: 'Godji',
        age : 39,
        grade: 'B',
        score: 80
    },
    {
        name: 'Jennie',
        age : 65,
        grade: 'C',
        score: 70
    }
]
let student = students.find((s) => //find จะเข้าไปเช็คใน Array แล้วเอาข้อมูลที่ตรงเงื่อนไขไปเก็บไว้ใน student
    {
    if (s.name == "Godji") {
        return true
    }
})
let doublescore_student = students.map ((s) => //map จะเข้าไปเปลี่ยนค่าใน Array แล้วเอาข้อมูลที่เปลี่ยนไปเก็บไว้ใน student
{
    s.score = s.score * 2;
})

let  highscore_student = students.filter((s) => //filter จะเข้าไปเช็คใน Array แล้วเอาข้อมูลที่ตรงเงื่อนไขไปเก็บไว้ใน student
{
    if (s.score >= 80) {
        return true
    }
})

console.log('student :',student);
console.log('highscore_student :',highscore_student);