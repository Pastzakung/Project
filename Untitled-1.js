// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}


// This function clear all the values
function display(value) {
    document.getElementById("result").value += value;
}

// This function clear all the values
function clearScreen() {
    var p = document.getElementById("result").value;
    var q = eval(p) ;
    document.getElementById("result").value = q;
}

