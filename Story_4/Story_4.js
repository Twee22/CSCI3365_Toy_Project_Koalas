const myForm = document.getElementById("myForm");
const myDialog = document.getElementById("dialog")

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var userString = document.getElementById("userString").value;

    // check for empty string
    if (userString.trim() == "") {
        document.getElementById("dialogP").innerHTML = "A empty string can not be reversed";
        myDialog.showModal();
    } else {
        // split string into array, reverse array, rejoin array,and then display
        document.getElementById("dialogP").innerHTML = userString.split("").reverse().join(""); 
        myDialog.showModal();
    }
    //alert(userString.split("").reverse().join(""));

})
