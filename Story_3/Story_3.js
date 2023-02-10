
const button = document.getElementById("sum");
button.addEventListener("click", ()=>{
   // alert("button is clicked");

   // prompting user
   let userInput = prompt("Please enter the start number and end numbers separated by a comma")

   // split user input into array
   var inputArray = userInput.split(',');

   // checking to see if input is not a number
   if (isNaN(inputArray[0]) || isNaN(inputArray[1]) || inputArray[0] == "" || inputArray[1] == "") {
    alert("Must input only numbers")
    return false;

    } else {
        sumSequence(inputArray[0].trim(), inputArray[1].trim());
       }
   
})
// add error handling for empty ---- done
// customize button ---- done
// add end number ---- done
// change alert to something else

// function to output sum of numbers between startNumber and endNumber
function sumSequence(startNumber, endNumber) {
    var sum = 0;
    for (i = parseInt(startNumber); i <= parseInt(endNumber); i++ ) {
        sum+= i;
    }
    alert("The sequential sum of " + startNumber + " and " + endNumber + " is " + sum);
    return 0;
}

