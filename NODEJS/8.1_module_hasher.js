var pwd = require('./8_hasher.js');

console.log(pwd.PasswordHash('mango'));
console.log(pwd.MatchPassword('mango','banana'));
