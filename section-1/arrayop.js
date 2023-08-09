//Map
const nums = [23453, 46, 23, 39, 3, 8];

const newNums = [];
for(let i of nums){
    console.log(i ** 2);
    newNums.push(i ** 2);
}

console.log(newNums);


const result = nums.map( (n) => {return n*2 });
console.log(result);

const prices =[3400, 2347, 99, 27, 494, 988];
const result2 = prices.map((p) => {return p + p*0.1});
console.log(result2);

const result3 = prices.map((p) => {return p-(p*7.5/100)});
console.log(result3)

const nam =['anurag singh','aviral tripathi'];
const res = nam.map((p) => {return p.toUpperCase()});
console.log(res);

const num =[25,49,121];
const sq=num.map((p) => {return Math.sqrt(p)});
console.log(sq);

console.log(nam.map(((nam) =>{return nam.split(' ')[0]})));

