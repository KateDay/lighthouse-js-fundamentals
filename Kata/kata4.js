const instructorWithLongestName = function(instructors) {

let longestName = "";

for (var i = 0; i < instructors.length; i++) {

  if (longestName.length < instructors[i].name.length) {
   longestName = instructors[i].name;
  };

}

return longestName;

};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
], "=?", {name: "Jeremiah", course: "Web"}));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
], "=?", {name: "Domascus", course: "Web"}));

