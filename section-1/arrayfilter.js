const prices=[2300, 499, 233, 450, 3400,1800];

const filteredprice1 = prices.filter((p) => {return p<500});
console.log(filteredprice1);

const names = ['raju','kaliya','pinki'];
//create a filter to get names with length greater than 5

const filterednames = names.filter((names) => {return names.length>5});
console.log(filterednames);