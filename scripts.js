/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function(){
    const uform = document.querySelector("form"); //grabbing our form
    const message = document.querySelector(".message"); //grabbing our message so we can update it
    uform.classList.add("uform");  //adding a class to the form

    const inputE = document.querySelector("#email");
    
    
    uform.addEventListener("submit", function(event){ //setting effect on our form itself
        event.preventDefault();  //preventing our submission from actually being submitted

        const valEmail = inputE.value;  //grabbing the user's input to check validity
        
        if(valEmail === "") { //changing the placeholder if it is empty and resetting as well
            inputE.setAttribute("placeholder", "Please enter a valid email address");
            message.textContent = ""; //resetting the message
        } else {
            inputE.setAttribute("placeholder", "Enter your email"); // Reset the placeholder text
            message.innerHTML = `Thank you! Your email address ${valEmail} has been added to our mailing list!`;
            inputE.value = ""; //if the space is not empty we go ahead and send message then clear field
        }
    }); 

    
});




