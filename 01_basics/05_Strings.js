const name = "ujjwal"
const repoCount = 40

//console.log(name + repoCount + "value");

console.log(`Hello my name id ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hymusgaming')

// console.log(gameName);

// console.log(gameName[0]); // In this 0 is a indexing of a given string and from which we can know in 0 index which element is there .
// console.log(gameName.__proto__);


// ****** LENGTH *******
console.log(gameName.length);

// ****** TOUPPER & LOWER *******
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

// ****** CHARAT *******
console.log(gameName.charAt(4));

// ****** INDEXOF *******
console.log(gameName.indexOf('H'));

// ******* SUBSTRING *******
const newString = gameName.substring(0,4)
console.log(newString);

// ****** SLICE ******
const anotherString = gameName.slice(-11,5)
console.log(anotherString);

// ***** TRIM *******
const newStringOne = "     hymus    "
console.log(newStringOne);
console.log(newStringOne.trim());

// ***** REPLACE *****
const url = "https://ujjwalcodin%20gschool.com"
console.log(url.replace('%20','-'));

// ***** INCLUDES *****
console.log(url.includes('sundar'))











    

