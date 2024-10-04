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

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

for (let user of users) {
    console.log(user);
}

for (let i in users) {
    console.log(users[i]);
}

let i = 0;
while (i < users.length) {
  console.log(users[i]);
  i++;
}

while (users.length > 0) {
    console.log(users.pop());
}

console.log(users);





