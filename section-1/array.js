const arr1 = [345,'hello', false,console.log];

console.log(arr1);
console.log(typeof arr1);

const movies =['Bahubali','Asur','Vampire Diaries','Interstellar','Avengers','RRR'];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies[10]);

console.log(movies.at(-4));

movies[3] ='Inception';
console.log(movies);

//slicing
console.log(movies.slice(1,4));
console.log(movies.slice(1,-1));
console.log(movies.slice(2));
console.log(movies.slice(2,10));

//Adding an element
movies.push('Flash');  //adds element at the end
movies.unshift('Flash'); // adds element at  the beginning
console.log(movies);

//removing element
movies.pop();   //remove element from the end
movies.shift();   //remove element from the beginning

movies.splice(3,2); //removes element from any position

console.log(movies);

console.log(movies);
console.log(movies);

console.log(['ironman', ...movies,'batman']);

console.log([...movies.slice(0,3),'new element', ...movies.slice(3)]);
