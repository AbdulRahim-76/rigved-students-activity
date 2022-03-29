//libraries
let express = require("express");
let parser = require("body-parser");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;

let app = express(); //express function
let PORT = 3001; // express server port
let dbURL = "mongodb://localhost:27017"; // database url

app.listen(PORT, () => console.log(`Server running in ${PORT}`));

// middleware to parse request & enable cors
app.use(parser.json());
app.use(cors());

// on GET: /employees - returns all the employee object 
app.get("/employees", (request, response) => {
    // connect(url, parser, callback) --> parser parses the url to establish connection
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        let cursor = db.collection("employees").find();
        let employees = [];

        //cursor.forEach(callback1, callback2)
        cursor.forEach((doc, err) => {
            if (err)
                throw err;
            employees.push(doc);
        }, () => {
            response.json(employees);
            client.close();
        });
    });
});

// on POST: /employees - store the employee object
app.post("/employees", (request, response) => {
    let empDocument = request.body;
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        db.collection("employees").insertOne(empDocument, (err, res) => {
            if (err) {
                // 409 status code is for conflict
                response.status(409).json({ "message": `employee with an id ${empDocument._id} exists` });
            }
            // 201 status code is used when resource is created
            response.status(201).json(res);
            client.close();
        });
    });
});

//on GET: /employees/:id to get a single document based on id
app.get("/employees/:id", (request, response) => {
    let id = parseInt(request.params.id); // reading the path parameter, converting id in int format
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        db.collection("employees").findOne({ _id: id })
            .then((doc) => {
                if (doc != null) {
                    response.json(doc);
                } else {
                    response.status(404).json({ "message": `Sorry ${id} doesn't exist` })
                }
                client.close();
            });
    });
});

//on DELETE: /employeess/:id to delete the document based on id
app.delete("/employees/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        db.collection("employees").deleteOne({ _id: id })
            .then((doc) => {
                response.json(doc);
                client.close();
            })
    });
});

// on PUT: /employees/:id/:salary to update salary from id
app.put("/employees/:id/:salary", (request, response) => {
    let id = parseInt(request.params.id);
    let salary = parseInt(request.params.salary);
    mongoClient.connect(dbURL, { useNewUrlParser: true }, (error, client) => {
        if (error)
            throw error;
        let db = client.db("mydb");
        db.collection("employees").updateOne({ _id: id }, { $set: { salary: salary } })
            .then((doc) => {
                response.json(doc);
                client.close();
            })
    });
});