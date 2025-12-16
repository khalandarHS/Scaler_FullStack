const obj = {
    firstName: "Khal",
    lastName: "shaik",
};

// spread operator
const obj2 = { ...obj };
obj2.firstName = "uttam";
obj2.lastName ="sharma";

console.log(obj);
console.log(obj2);