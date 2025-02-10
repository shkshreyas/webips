console.log("Hello VIT students!");

let s = "abc";
let n = 123;
let b = true;
let nl = null;
let u;
let o = {};
let ar = [];

console.log(s, typeof s);
console.log(n, typeof n);
console.log(b, typeof b);
console.log(nl, typeof nl);
console.log(u, typeof u);
console.log(o, typeof o);
console.log(ar, Array.isArray(ar));

let inp = prompt("Input:");
console.log(inp, typeof inp);

let x = 5;
let y = 7;
let z = x + y;
console.log(z);

let a = 3;
let d = 8;
[a, d] = [d, a];
console.log(a, d);