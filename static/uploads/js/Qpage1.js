function checkAge() {
    const form = document.getElementById("intoform");

    if (!form.checkValidity()) {
        return false;
    }

    const age = document.getElementById("age").value;

    if (age <= 10) {
        window.location.href = "/blue";
    } 
    else if (age <= 18) {
        window.location.href = "/pink";
    } 
    else {
        window.location.href = "/white";
    }

    return false; 
}

function showDisabilityDetails() {
    document.getElementById("disability").style.display = "block";
} 

<<<<<<< HEAD
function blueM(){
    window.location.href = "/blueM";
}

function pinkM(){
    window.location.href = "/pinkM";
}
=======
function models(){
    
}
>>>>>>> b87d363e7cc9471cec8f88e839c0a0338c3ee30c
