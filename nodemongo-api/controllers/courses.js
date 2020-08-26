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
    console.log(req.body);
    CourseModel.find((err, docs) => {
        if(!err)
        {
            //console.log(docs);
            res.send(docs);
        }
    });
});

router.post("/post", (req, res, next)=>
{
    console.log(req.body);
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseId = req.body.courseId;
    course.courseFee = req.body.courseFee;
    course.save((err, doc)=>{
        if(!err){
            console.log("success");
            res.send(doc);
        }
        else
        {
            res.send("error");
        }

    });
});

router.put("/update/:id", (req, res, next)=>
{
    console.log(req.body);
    var model = {
        courseName: req.body.courseName,
        courseFee: req.body.courseFee        
    };
    CourseModel.update({courseId: req.params.id}, model, (err, docs) => {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Hero updated successfully"
        })
    })
    
});

// router.get("/listrender", (req, res) => {
//     CourseModel.find((err, docs) => {
//         if(!err)
//         {
//             //console.log(docs);
//             res.render("list",{data: docs});
//         }
//     });
// });



module.exports = router;