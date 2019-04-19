const instructorWithLongestName = function(instructors) {
var name = 0;
for (var i = 0; i < instructors.length; i++) {
    let name = instructors[i].name;

      if (name.length < instructors[i].name.length) {
        let longest = instructors[i].name.length};
    //console.log(longest);
}
console.log(name);

};
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
], "=?", {name: "Jeremiah", course: "Web"}));
/*console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
], "=?", {name: "Domascus", course: "Web"}));*/

//return instructors[1].name.length