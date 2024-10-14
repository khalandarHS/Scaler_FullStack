// sum of the all numbers

    arr = [1, 2, 3, 4, 5];


function sumOfNumbers(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}   

console.log("Sum of Numbers : " + sumOfNumbers(arr)); 

// reduce HOF should be used when you want to reduce array of items into a single item

//acc -> sum (accumilating numbers)
const sum1 = arr.reduce((result, num) => {
    console.log(result, num);
    return result + num;
});

console.log("Sum of Numbers form reduce: " + sum1);


//