let express = require('express');
let fs = require('fs');
let app = express();
let PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
});

// 1. store userid, name & age

app.post('/user/:userId/:userName/:userAge', (request, response) => {

    let data = fs.readFileSync('user.json');
    let string = data.toString();
    let userArray = undefined;

    if (string.length < 1 || string == "") {
        userArray = [];
    } else {
        userArray = JSON.parse(string);
    }

    let id = request.params.userId;
    let name = request.params.userName;
    let age = request.params.userAge;
    let user = { userId: id, userName: name, userAge: age };
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
    let datastring = data.toString();
    let users = JSON.parse(datastring);

    for (let i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            let user = { userId: users[i].userId, name: users[i].userName, age: users[i].userAge };
            response.json(user);
        }
    }
});

// delete user by id

app.delete('/user/:userId', (request, response) => {
    let id = request.params.userId;
    let data = fs.readFileSync('user.json');
    let datastring = data.toString();
    let users = JSON.parse(datastring);

    for (let i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            users.splice(i, 1);
            let userData = JSON.stringify(users);
            fs.writeFileSync('user.json', userData);
            response.json(users);
        }
    }
});






