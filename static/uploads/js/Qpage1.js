<script>
function checkAge() {
     age = document.getElementById("age").value;

    if (age <= 10) {
        window.location.href = "/kids";
    } 
    else if (age >= 12 && age <= 18) {
        window.location.href = "/teens";
    } 
    else if (age > 30) {
        window.location.href = "/adults";
    } 
    else {
        alert("No matching age group");
    }
}
</script>