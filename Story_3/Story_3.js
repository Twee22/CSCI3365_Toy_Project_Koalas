const myForm = document.getElementById("myForm");
const myDialog = document.getElementById("dialog")

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var startNumber = document.getElementById("startN").value;
    var endNumber = document.getElementById("endN").value;
    
    // check for number input
    if (isNaN(startNumber) || isNaN(endNumber) || startNumber == "" || endNumber == "") {
        document.getElementById("dialogP").innerHTML = "Must input only numbers";
        myDialog.showModal();
        return false;
    
        } else {
            // call to function sumSequence
            sumSequence(startNumber.trim(), endNumber.trim());
           }
})

// function to output sum of numbers between startNumber and endNumber
function sumSequence(startNumber, endNumber) {
    var sum = 0;
    for (i = parseInt(startNumber); i <= parseInt(endNumber); i++ ) {
        sum+= i;
    }
    // output sum to dialog
    document.getElementById("dialogP").innerHTML = "The sequential sum of " + startNumber + " and " + endNumber + " is " + sum; 
        myDialog.showModal();
    return 0;
}


