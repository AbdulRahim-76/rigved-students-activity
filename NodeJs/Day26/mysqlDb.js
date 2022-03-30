//libraries
let express = require('express');
let parser = require('body-parser');
let mysql = require('mysql2');

let app = express();
let PORT = 4000;

//database
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rigved_activity'
});

// middleware to parse request
app.use(parser.json());

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

//MySQL connect
connection.connect((error) => {
  if (error)
    throw error;
  console.log('Mysql Database Connected');
});

// on GET: /student - returns all the student object
app.get('/student', (request, response) => {
  let stdTable = "SELECT * from student";

  let students = connection.query(stdTable, (err, result) => {
    if (err)
      throw err;
    response.json(result);
  });
});

//on GET: /student/:Roll_No to get a single document based on Roll_No
app.get('/student/:Roll_No', (request, response) => {
  let Roll_No = request.params.Roll_No;
  let stdTable = `SELECT * FROM student WHERE Roll_No=${Roll_No}`;

  let student = connection.query(stdTable, (err, result) => {
    if (err)
      throw err;
    if (result != null) {
      response.json(result);
    } else {
      response.status(404).json({ "message": `Sorry ${Roll_No} doesn't exist` })
    }
  });
});

// on POST: /student - store the student object
app.post('/student', (request, response) => {
  let Roll_No = request.body.Roll_No;
  let Name = request.body.Name;
  let Age = request.body.Age;

  let student = { "Roll_No": Roll_No, "Name": Name, "Age": Age };

  let stdTable = "INSERT into student SET ?";

  let query = connection.query(stdTable, student, (error, result) => {
    if (error)
      throw error;
    response.status(201).json(result);
  });
});


//on DELETE: /student/:Roll_No to delete the document based on Roll_No
app.delete('/student/:Roll_No', (request, response) => {
  let Roll_No = request.params.Roll_No;
  let stdTable = `DELETE from student WHERE Roll_No=${Roll_No}`;

  let query = connection.query(stdTable, (error, result) => {
    if (error)
      throw error;
    response.json(result);
  });
});

