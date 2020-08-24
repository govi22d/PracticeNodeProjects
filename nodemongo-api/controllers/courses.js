const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CourseModel = mongoose.model("Course");

router.get("/", (req, res) => {
    res.send("base course controller")
});

router.get("/list", (req, res) => {
    // var course = new CourseModel();
    // course.courseName ="node";
    // course.courseId = "1";
    // course.courseFee = "20";
    // course.save();

    CourseModel.find((err, docs) => {
        if(!err)
        {
            console.log(docs);
            res.send(docs);
        }
    });
});

module.exports = router;