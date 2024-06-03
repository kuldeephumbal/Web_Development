function getdate(){
    var date = new Date();
    var today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    return today;

}
function gettime(){
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return time;
}
module.exports.getdate = getdate;
module.exports.gettime = gettime;