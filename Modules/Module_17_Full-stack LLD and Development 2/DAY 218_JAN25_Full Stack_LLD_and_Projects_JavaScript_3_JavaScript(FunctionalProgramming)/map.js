const arr = [1,2,3,4,5];

function calculateSquare(arr){
    const result = [];
    for (i=0; i<arr.length;i++){
        result.push(arr[i] * arr[i]);
    }
    return result;
}
console.log(calculateSquare(arr));

// map -> when on each index of the array you are expecting
// same operation to be done

// foreach loop

const outputArr = arr.map((num, index) => {
    console.log(num, index);
    return num * num;
});
console.log(outputArr);



//Map example
// INR to USD
const transaction = [1000, 2000, 10000, 30, 40];
const inrToUSD = 83;

const outputTxnArr  = transaction.map((txn, index) => {
    //console.log(rup , index);
    return txn / inrToUSD;
});
console.log(outputTxnArr);
