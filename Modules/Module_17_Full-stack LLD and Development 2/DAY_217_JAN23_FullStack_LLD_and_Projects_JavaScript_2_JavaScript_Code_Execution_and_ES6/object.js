const CaptianAmerica = {
    name : "Steve Rogers",
    age : 165,
    allies : ["Tony", "Natasha", "Bucky", "Dr Banner", "Thor"],
    address : {
        contry : "United States",
        city : {
            name : "Brooklyn",
            zipcode : 12345,
        },
    },
    isAvengerLeader : true,
    sayHi : function(){
        console.log("Captian Says Hi");
    },

};
// CRUD
// accessing the items of obj
console.log(CaptianAmerica.name);
console.log(CaptianAmerica.sayHi());

// Updating the items of obj
CaptianAmerica.isAvengerLeader = false;
CaptianAmerica.address.city.zipcode = 54321;
console.log("Updated leader status", CaptianAmerica);

// adding the items into obj
CaptianAmerica.movies = [
    "Civil War",
    "Infinity War",
    "Age of Ultron",
    "End Game",
    "First Avenger",
]
console.log("Added Movies", CaptianAmerica);

//Deleting the items from Obj

delete CaptianAmerica.movies;
console.log("Removed Movies", CaptianAmerica)
