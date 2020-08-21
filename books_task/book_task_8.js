str = "123.123e-23";

console.log(str.match(/ca[t|r]/g));
console.log(str.match(/pr?op/g));
console.log(str.match(/ferr(et|y|ari)/g));
console.log(str.match(/\b(\w+ious)\b/));
console.log(str.match(/\s[.|,|:|;]/g))
console.log(str.match(/\w{6,}/g));
console.log(str.match(/\b[\w][^e]+\b/g));
console.log(str.match(/\b\d+(\.\d+(e-?\d)?)?\b/g));