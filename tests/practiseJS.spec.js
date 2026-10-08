// let total = "$1,234.56";
// let newString = replace('$','').replace(',','');
// let newNumber = Number(newString);

// console.log(newNumber > 1000);



//     const roles = ["admin", "editor", "viewer", "admin"];

// // 1. new Set(roles) removes the duplicate "admin"
// // 2. The [... ] spreads the unique values back into a fresh array
// const uniqueRoles = [...new Set(roles)];

// console.log(uniqueRoles); // ["admin", "editor", "viewer"]

const number = [5, 10, 15, 20];

const greaterthanTen = number.filter(num => num > 10);
console.log(greaterthanTen);

const transformthembytwenty = number.map(num => num *20);
console.log(transformthembytwenty);
