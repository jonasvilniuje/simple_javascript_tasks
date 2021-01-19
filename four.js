
function doDate()
{
    var str = "";

    var now = new Date();

    str += now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(str)
}

setInterval(doDate, 1000);