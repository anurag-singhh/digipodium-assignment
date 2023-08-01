const user = {name : 'Raju',email : 'raju@gmail.com',password : '8456'};

console.log(user.name);
console.log(user['email']);

user.address = 'lucknow';
console.log(user);
user.password='1234';
console.log(user);

let customkey = 'email';
console.log(user[customkey]);
user[customkey] = 'raju@hotmail.com';
console.log(user);

let smartphone ={
    brand : 'samsung',
    model : 'S21',
    price : 70000,
    color : 'Black'
};
smartphone.color = ['Black','White','Blue'];
console.log(smartphone.color[2]);
smartphone.color.push('Red');
console.log(smartphone);
const smartphoneList = [
    {brand : 'Samsung', model : 'S21', price :70000, color :['Black','Blue']},
    {brand : 'Samsung', model : 'S23', price :86000, color :['Black','Blue']},
    {brand : 'Apple', model : 'iphone 12', price :80000, color :['White','Red','Yellow']},
    {brand : 'Oneplus', model : '9 Pro', price :60000, color :['Blue','White']},
    {brand : 'Oneplus', model : 'Nord', price :35000, color :['Blue','White']},
    {brand : 'Xiaomi', model : 'Mi 11', price :50000, color :['Black','Gold']},
];
//syntax to access price of oneplus 9 pro
console.log(smartphoneList[2].price);

//syntax to add blur color to mi 11
smartphoneList[3].color.push('Blur');
console.log(smartphoneList);

//syntax to delete the color of Apple 
smartphoneList[1].color.splice(1,2);
console.log(smartphoneList);
// use filter to get all phones prices less than 70000
const filteredResult = smartphoneList.filter((phone) => {return phone.price<70000});
console.log(filteredResult);

//const res = smartphoneList.filter((phone) =>{return phone.brand.toLowerCase()==='Samsung'.toLowerCase()});
const res = smartphoneList.filter((phone) =>{return phone.brand.toLowerCase().includes('Samsung'.toLowerCase())});
console.log(res);

//all phones with color blue
const res1= smartphoneList.filter((phone) => {return phone.color.includes('Blue')}) ;
console.log(res1);


//use filter to get all phone with color blue and price less then 70000
const res2= smartphoneList.filter((phone) => {return phone.color.includes('Blue') && phone.price<70000}) ;
console.log(res2);

const brands = smartphoneList.map((phone) => {return phone.brand});
console.log(brands);
