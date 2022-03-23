let read=require('readline-sync');
let fs=require('fs');

let id=read.questionInt('Enter your Id: ');
let n=read.question('Enter your name: ');
let s=read.questionInt('Enter your salary: ');

let employee = {
  "Id": id, "Name": n, "Salary": s
};

let jsonString=JSON.stringify(employee);
fs.writeFileSync('employee.json',jsonString);
console.log('Done..')