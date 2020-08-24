const connection = require("./model");
const express = require('express');
const path = require('path');
const expressHanlderbars = require('express-handlebars');
const bodyparser = require("body-Parser");
const CourseController = require('./controllers/courses');

const application = express();
application.use(bodyparser.urlencoded({extended:true}));

application.set("views", path.join(__dirname + "/views/"));
application.engine("hbs", expressHanlderbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));
application.set("view engine", "hbs")

application.get("/", (req, res) => {
    res.send({result:"ok"});
});

// application.get("/course1", (req, res) => {
//     res.render("index", {});
// });

application.use("/course", CourseController);

application.listen(3000, () => {
    console.log("listening at 3000 port");
});