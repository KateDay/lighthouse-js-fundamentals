let numberOfVowels = function(data) {
  // Put your solution here

  var Count = [];

    for (i = 0; i < data.length; i++){

       if (data.charAt(i) === "a"
        || data.charAt(i) === "e"
        || data.charAt(i) === "i"
        || data.charAt(i) === "o"
        || data.charAt(i) === "u"){

    Count.push(data.charAt(i));
      }
      }
  return Count.length;

};

console.log(numberOfVowels("orange"), "=?", 3);
console.log(numberOfVowels("lighthouse labs"), "=?", 5);
console.log(numberOfVowels("aeiou"), "=?", 5);

/*function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }

  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));*/

// OR

/*
let numberOfVowels = function(data) {
// Put your solution here
  var count = 0;
  for (let i = 0; i < data.length; i++){

    if (data.charAt(i) === "a" || data.charAt(i) === "e"
      || data.charAt(i) === "i" || data.charAt(i) === "o"
      || data.charAt(i) === "u"){
      count += 1;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"), "=?", 3);
console.log(numberOfVowels("lighthouse labs"), "=?", 5);
console.log(numberOfVowels("aeiou"), "=?", 5);
*/