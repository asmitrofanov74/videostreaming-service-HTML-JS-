window.addEventListener('load', function () {
    
    }
);
var items = [
    "1", "2", "3", "4", "5", "6", "7", "8",
    "9", "10", "11", "12"];


function delet(id) {
    document.getElementById(id).style.display="none";
}
function hide(id) {
    document.getElementById(id).style.visibility="hidden";
}



function reset() {
    for (id of items) {
        document.getElementById(id).style.display = "block";
        document.getElementById(id).style.visibility = "visible";
    }
    
}

