// filter

const arr = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];

function getEven(arr){
    let result = [];
    for (let i=0; i<arr.length;i++){
        if(arr[i] % 2 ===0 ){
            result.push(arr[i]);
        } 
    }
    return result;
};

console.log(getEven(arr));

//By Using Filter the above code

const getEvenNumber = arr.filter((num) => {
    return num % 2 ===0;
});

const getOddNumber = arr.filter((num) => {
    return num % 2 !=0;
});

console.log("Even Filter Results: " + (getEvenNumber));
console.log("Odd Filter Results: " + (getOddNumber));


// === vs ==

// comparision operators

// == just checking content value
// === checking both data type and value
const x = 10;
const y = "10";

console.log(x == y, x === y); //never use '==', always use '===' as it even checks datqa type and values 


// example same used in maps

const transaction = [1000, 2000, 10000, 30, 40, -300, -600, -350];
const getOnlyPositiveTxns = transaction.filter((txn) => {
    return txn > 0;
});

console.log(getOnlyPositiveTxns);