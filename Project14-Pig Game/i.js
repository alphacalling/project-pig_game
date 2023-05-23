'use scrict'

const arr=[3,5,[1,2]];

let [i, ,j]=arr;
console.log(i , j)

let [k,p]=[j,i];

console.log(k,p)


const [a,b, ...oth] = [1,2 ,8,9]

console.log(a,b,oth)


let aa=10;
const g= null??0;
console.log(g)