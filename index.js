//example of using the ^ anchor to match the beginning of the text.
const string = "a, b, c";
// const string = "1, 2, 3";
// "/w" matches an letter adding the caret in front will only show "a"
let re = /^\w/g;
// "/d" matches any number 0-9. Adding the anchor caret in front will only show the number '1'
// let re = /^\d/g;
let matches = string.match(re);

console.log(matches);

