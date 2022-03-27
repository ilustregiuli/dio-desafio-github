
// MAP

function getAdmins(users){
    
    let adminUsers = [];
    for (let [k,v] of users) {
        if(v === 'Admin'){
            adminUsers.push(k); 
        }
    }

    return adminUsers;
}

const systemUsers = new Map();

systemUsers.set("Giuli","Admin");
systemUsers.set("Pedro","User");
systemUsers.set("Maria","User");
systemUsers.set("Joao","Admin");
systemUsers.set("Oscar","User");
systemUsers.set("Dario","Admin");

let admins = getAdmins(systemUsers);

console.log("Exercio de MAP");
console.log(admins);

// SET

const mySet = new Set();

let numbers = [30, 30, 40, 5, 223, 2049, 3034, 5];

for (let number of numbers) {
    mySet.add(number);
}

console.log("Exercicio de SET");
console.log(mySet);
