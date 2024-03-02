var array = [1, 2, 3, 4, 5];
var answer = [];
var multi = 1;
var position = 0;
for (var i=0;i<array.length;i++){
    // console.log(multi);
    for(var j=0;j<array.length;j++){
        if(position == j){
        }
        else{
            multi *= array[i];
        }
    }
    answer.push(multi);
    position++;
    multi=1;
}
console.log(answer);