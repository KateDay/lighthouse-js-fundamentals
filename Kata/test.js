/*let anInstructor = {name: "Samuel", course: "iOS"};

let anArrayOfInstructors = [ {name: "Samuel", course: "iOS"}, {name: "Jeremiah", course: "Web"} ];



console.log(anInstructor);
console.log(anInstructor.name);
console.log(anArrayOfInstructors[0]);
console.log(anArrayOfInstructors[0].course)

var listOfCourses = [
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
];

for (let eachCourse of listOfCourses) {
  console.log(eachCourse.name + ' has ' + eachCourse.name.length + ' characters');
}
return listOfCourses;*/

const instructorWithLongestName = function(instructors) {
  var name = 0;
  for (var i = 0; i < instructors.length; i++) {
    name = instructors[i].name;
    console.log("At the " + i + " iteration of my loop, name contains: " + name);
  }
  return name.length;
};


console.log(instructorWithLongestName([
{name: "Matthew", course: "Web"},
{name: "David", course: "iOS"},
{name: "Domascus", course: "Web"}
]));