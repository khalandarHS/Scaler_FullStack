const a =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//size of an array
console.log(a.length);

//for loop
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

//for each

a.forEach((element) =>{
    console.log(element);
});

//Even Items by using for loop

for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Even Items by using "FOR EACH" loop

a.forEach((element, index) =>{
    if (index % 2 === 0) {
    console.log(index);
    }
});

// push add item into the array at the last position

a.push(11);
a.push(12);
a.push(13);
a.push(14);
a.push(15);

console.log(a);

//pop remove item from the array at the last position
a.pop();
console.log(a);

//shift remove item from the array at the first position

a.shift();
console.log(a); 

//unshift add item into the array at the first position

a.unshift(16);
a.unshift(17);
a.unshift(18);
a.unshift(19);
a.unshift(20);

console.log(a);

// // divides an array into 2 pieces and returns as new array
// // slice(starting index , ending index)
const b = a.slice(3);
console.log(a);
console.log(b);

// splice  -> add, remove and replace items in an array
// start index, delete no of items, [all the items]


// adding items into an array
b.splice(2, 2, 100, 101);
console.log(b);

// // start and end index
const c = a.slice(0, 3);
console.log(c);

// removing items from an array

b.splice(1, 3);
console.log(b);

// replacing items in an array
b.splice(0, 2, 13, 14);
console.log(b);