let fs = require("fs");
let data = fs.readFileSync("emp.json");
let dataString = data.toString();
let jsArray = JSON.parse(dataString);
console.log(jsArray);
 
let express = require("express");
let app = express();
app.listen(3003,()=>{
    console.log('Server is running on 3003');
});
app.get('/employee',(request,response)=>{
    response.json(jsArray)
});