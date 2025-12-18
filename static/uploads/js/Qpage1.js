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

