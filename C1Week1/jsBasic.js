let firstName = "Debajyoti";
let age = 22;
console.log(firstName);
console.log(age);


let users = ["deba", "amol", "akash", "sanket"];
console.log(users);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users.length);
console.log(users[users.length - 1]);
console.log(users[users.length - 2]);
console.log(users[users.length - 3]);
console.log(users[users.length - 4]);

// Loop through the users array using a traditional for loop
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// Loop through the users array using a for...of loop
for (let user of users) {
    console.log(user);
}

// Loop through the users array using a for...in loop
for (let i in users) {
    console.log(users[i]);
}

// Loop through the users array using a while loop
let i = 0;
while (i < users.length) {
  console.log(users[i]);
  i++;
}

// Remove and log each user from the array until it's empty
while (users.length > 0) {
    console.log(users.pop());
}

// Log the empty users array
console.log(users);






