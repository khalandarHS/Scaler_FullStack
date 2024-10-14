const arr=[1,2,3,4,5,6,7,8,9,10];
const arr1=[11,12,13,14,15,16,17,18,19,20];

const arr2=[];

for(let i=0;i<arr.length;i++){
    arr2.push(arr[i]);
}

for(let i=0;i<arr1.length;i++){
    arr2.push(arr1[i]);
}

console.log(arr2);

const arr3=[...arr, ...arr1];
console.log(arr3);

//rest ->rest of items

function myBio(firstname, lastname, ...restBio){
    return{
        firstname: firstname, 
        lastname: lastname,
        ...restBio,
    };
}

console.log(myBio("khal","uttam", "9000484101","Anantapur"));

//descructuring -> breaking down into smaller parts

let a = 10;
let b = 20;

const arr4=[];
arr4.push(a);
arr4.push(b);
[b,a]=arr4;
//[c, d]=[10,20];
//[b,a]=[10,20];
console.log('a: ',a);
console.log('b: ',b);

//console.log('c: ',c , 'd: ',d);

const arr5=[1,2,3,4,5,6,7,];
const [f,g,...h]=arr5;

console.log(arr5);
console.log(f,g,h);

const {lastName, ...objOtherItem}={
    firstName: "Khal",
    lastName: "shaik",
    phone: "9000484101",
}

console.log(lastName, objOtherItem);

