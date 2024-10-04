// Create a user object
let user = {
    name: "Debajyoti",
    age: 22,
    email: "debajyotihui1707@gmail.com",
    phone: "9641980159",
    city: "Kharagpur",
    country: "India",
    hobbies: ["reading", "coding", "traveling"],
    address: {
        street: "Radhamohanpur Road",
        city: "Kharagpur",
        state: "West Bengal",
        zip: "721160"
    },
    isMarried: false,
    isStudent: true,
    isWorking: true,
    isRetired: false,
    isEmployed: true
}

console.log("Log the entire user object:---------- ");
console.log(user);

console.log("Iterate over the user object using a for...in loop and log each key-value pair:----------")
for (let key in user) {
    console.log(key, user[key]);
}

console.log("Iterate over the hobbies array using a for...of loop and log each hobby:----------");
for (let value of user.hobbies) {
    console.log(value);
}

console.log("Iterate over the values of the user object using Object.values() and log each value:----------");
for (let value of Object.values(user)) {
    console.log(value);
}   

console.log("Iterate over the keys of the user object using Object.keys() and log each key:----------");
for (let key of Object.keys(user)) {
    console.log(key);
}

console.log("Iterate over the entries (key-value pairs) of the user object using Object.entries() and log each key-value pair:----------");
for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

console.log("Iterate over the entries (key-value pairs) of the address object using Object.entries() and log each key-value pair:----------");
for (let [key, value] of Object.entries(user.address)) {
    console.log(key, value);
}
