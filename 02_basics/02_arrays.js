 const marvel_heroes= ["thor","spiderman","ironman"]
 const dc_heros = ["superman","batman","flash"]

//  marvel_heroes.push(dc_heros)

//  console.log(marvel_heroes);
//  console.log(marvel_heroes[3][1]);    it is not the right way to merge

const all_heros = marvel_heroes.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heroes,...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[4,5]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

Array.isArray["Hymus"]
console.log(Array.isArray("Hymus"));
console.log(Array.from("Hymus"));
console.log(Array.from({name:"Hymus"}));    //interesting

let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));












 
