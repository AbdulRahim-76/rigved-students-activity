let read= require('readline-sync'); 
let fs= require('fs');
 
let data=fs.readFileSync('records.json');
let dataString=data.toString();
let jsArray=undefined;

if(dataString.length<1 || dataString==""){
    jsArray=[];
}else{
    jsArray=JSON.parse(dataString);
}

let n = read.question('Enter name: ');
let a = read.questionInt('Enter age: ');
let emp={name:n, age:a};
jsArray.push(emp);

let jsonArray=JSON.stringify(jsArray);
fs.writeFileSync("records.json", jsonArray);

