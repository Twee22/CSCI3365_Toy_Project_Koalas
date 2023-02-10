
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var startNumber = document.getElementById("startN").value;
    var endNumber = document.getElementById("endN").value;
    
    if (isNaN(startNumber) || isNaN(endNumber) || startNumber == "" || endNumber == "") {
        alert("Must input only numbers")
        return false;
    
        } else {
            sumSequence(startNumber.trim(), endNumber.trim());
           }
})

// function to output sum of numbers between startNumber and endNumber
function sumSequence(startNumber, endNumber) {
    var sum = 0;
    for (i = parseInt(startNumber); i <= parseInt(endNumber); i++ ) {
        sum+= i;
    }
    alert("The sequential sum of " + startNumber + " and " + endNumber + " is " + sum);
    return 0;
}


