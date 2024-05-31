//objects de-structure

const course ={
    coursename:"javascript",
    price : "999",
    courseInstructor:"bhupendra"
}

const {courseInstructor: corInsert}=course; // {old name :change new name}
// console.log(courseInstructor);
console.log(corInsert);

 