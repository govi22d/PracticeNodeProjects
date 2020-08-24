const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mycustomers", { useNewUrlParser: true }, (error) => {
    if(!error) {
        console.log("success")
    }
    else {
        console.log("error");
    }
});

const Course = require("./course");