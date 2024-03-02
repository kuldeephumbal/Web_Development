function talk(name){
    console.log("hello "+name);
}

function walk(name){
    console.log("walk "+name);
}

module.exports.talk = talk;
module.exports.walk = walk;