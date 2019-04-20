const urlEncode = function(text) {
  // Put your solution here
  // let url = text;
  // url = text.replace(" ","%20");

  //return text.replace(" ","%20");
// return encodeURI(text);
for (var i = 0; i < text.length; i++) {
   if (text.charAt(i) = null){
    text.replace(20%);

  }
 }

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
/*
In this exercise, we will be given a normal string of words and turn it
into a percent-encoded string by replacing all whitespace with %20.
Expected Output:
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/