let express = require('express');
let fs = require('fs');
let parser = require('body-parser');

let app = express();
app.use(parser.json());

let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});

// 1. store userid, name & age

app.post('/user', (request, response) => {

    let data = fs.readFileSync('user.json');
    let string = data.toString();
    let userArray = undefined;

    if (string.length < 1 || string == "") {
        userArray = [];
    } else {
        userArray = JSON.parse(string);
    }

    let user = request.body;
    userArray.push(user);

    let users = JSON.stringify(userArray);
    fs.writeFileSync('user.json', users);
    response.json(userArray);

});

// get all users

app.get('/user/', (request, response) => {

    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let users = JSON.parse(dataString);
    response.json(users);
});

// get user by id 

app.get('/user/:userId', (request, response) => {

    let id = request.params.userId;
    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let users = JSON.parse(dataString);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            let user = { id: users[i].id, name: users[i].name, age: users[i].age };
            response.json(user);
        }
    }
});

// delete user by id

app.delete('/user/:userId', (request, response) => {

    let id = request.params.userId;
    let data = fs.readFileSync('user.json');
    let dataString = data.toString();
    let users = JSON.parse(dataString);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users.splice(i, 1);
            let userData = JSON.stringify(users);
            fs.writeFileSync('user.json', userData);
            response.json(users);
        }
    }
});






