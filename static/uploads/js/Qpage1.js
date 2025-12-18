
function checkAge() {
    var age = document.getElementById("age").value;

    if (age <= 10) {
        window.location.href = "/blue";
    } 
    else if (age >= 12 && age <= 18) {
        window.location.href = "/pink";
    } 
    else if (age > 30) {
        window.location.href = "/white";
    } 
    else {
        alert("No matching age group");
    }
}


function showDisabilityDetails() {
    document.getElementById("disability").style.display = "block";
} 

function blueM(){
    window.location.href = "/blueM";
}

function pinkM(){
    window.location.href = "/pinkM";
}

function submitForm(){
    var age = parseInt(document.getElementById("budget").value);
    console.log(age, typeof age);


    if (budget <= 1000) {
        window.location.href = "/models2";
    } 
    else {
        window.location.href = "/models";
    } 
}