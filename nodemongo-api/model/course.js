const mongoose = require('mongoose');

const courseSchema = mongoose.Schema(
    {
        courseName: {
            type: String,
            required: "Required"
        },
        courseId: {
            type: String
        },
        courseFee:{
            type: String
        }
    }
);

mongoose.model("Course", courseSchema);