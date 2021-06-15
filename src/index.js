
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello World");
    console.log(req);
});

var value = 1000000;
app.post("/add", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        sum: null,
    };
    let total = num1 + num2;
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.sum = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.sum = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.sum = "";
    } else {
        resObj.status = "success";
        resObj.message = "the sum of given two numbers";
        resObj.sum = total;
    }
    res.send(resObj);
});
app.post("/sub", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        difference: null,
    };
    let total = num1 - num2;
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.difference = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.difference = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.difference = "";
    } else {
        resObj.status = "success";
        resObj.message = "the difference of given two numbers";
        resObj.difference = total;
    }
    res.send(resObj);
});
app.post("/multiply", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        result: null,
    };
    let total = num1 * num2;
    if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.result = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.result = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.result = "";
    } else {
        resObj.status = "success";
        resObj.message = "The product of given numbers";
        resObj.result = total;
    }
    res.send(resObj);
});
app.post("/divide", (req, res) => {
    let { num1, num2 } = req.body;
    let resObj = {
        status: null,
        message: null,
        result: null,
    };
    let total = num1 / num2;
    if (num2 === 0) {
        resObj.status = "error";
        resObj.message = "Cannot divide by zero";
        resObj.result = "";
    } else if (typeof num1 === "string" || typeof num2 === "string") {
        resObj.status = "error";
        resObj.message = "Invalid data types";
        resObj.result = "";
    } else if (num1 < -value || num2 < -value || total < -value) {
        resObj.status = "error";
        resObj.message = "Underflow";
        resObj.result = "";
    } else if (num1 > value || num2 > value || total > value) {
        resObj.status = "error";
        resObj.message = "Overflow";
        resObj.result = "";
    } else {
        resObj.status = "success";
        resObj.message = "The division of given numbers";
        resObj.result = total;
    }
    res.send(resObj);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;