const myForm = document.getElementById("myForm");
const myDialog = document.getElementById("dialog")

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var startNumber = document.getElementById("startN").value;
    var endNumber = document.getElementById("endN").value;
    var stepNumber = document.getElementById("step").value;
    
    // check for number input
    if (isNaN(startNumber) || isNaN(endNumber) || isNaN(stepNumber) || startNumber == "" || endNumber == "" || stepNumber =="") {
        document.getElementById("dialogP").innerHTML = "Must input only numbers";
        myDialog.showModal();
        return false;
    
        // error checking for invalid input for sum
    } else if (stepNumber == "0") {
        document.getElementById("dialogP").innerHTML = "Step number can not be 0";
        myDialog.showModal();
        return false;

    } else if (startNumber < endNumber && stepNumber < 0)  {
        document.getElementById("dialogP").innerHTML = "Invalid input";
        myDialog.showModal();
        return false;

    } else if (startNumber > endNumber && stepNumber > 0) {
        document.getElementById("dialogP").innerHTML = "Invalid input";
        myDialog.showModal();
        return false;

        // call to fumction sumSequenceN with negative step
    } else if (parseInt(stepNumber) < 0) {
        sumSequenceN(startNumber.trim(), endNumber.trim(), stepNumber.trim());

    } else {
        // call to function sumSequence with positive step
        sumSequence(startNumber.trim(), endNumber.trim(), stepNumber.trim());
        }
})

// function to output sum of numbers between startNumber and endNumber with positive step
function sumSequence(startNumber, endNumber, stepNumber) {
    var sum = 0;
    for (i = parseInt(startNumber); i <= parseInt(endNumber); i+= parseInt(stepNumber)) {
        sum+= i;
    }
    // output sum to dialog
    document.getElementById("dialogP").innerHTML = "The sequential sum of " + startNumber + " and " + endNumber + " is " + sum; 
        myDialog.showModal();
    return 0;
}

// function to output sum of numbers between startNumber and endNumber with negative step
function sumSequenceN(startNumber, endNumber, stepNumber) {
    var sum = 0;
    for (i = parseInt(startNumber); i >= parseInt(endNumber); i+= parseInt(stepNumber)) {
        sum+= i;
    }
    // output sum to dialog
    document.getElementById("dialogP").innerHTML = "The sequential sum of " + startNumber + " and " + endNumber + " is " + sum; 
        myDialog.showModal();
    return 0;
}

