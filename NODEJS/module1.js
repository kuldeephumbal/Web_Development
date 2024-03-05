let Person ={
    talk: function(name){
        console.log(`${name} can talk`);
    },
    walk: function(name){
        console.log(`${name} can walk`);
    },
    move: function(name){
        console.log(`${name} is moving`);
    }
}

module.exports.Person = Person;
