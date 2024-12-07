function changeReadMore() {
   const mycontent =
       document.getElementById('mybox1id');
   const mybutton =
       document.getElementById('mybuttonid');

   if (mycontent.style.display === 'none'
       || mycontent.style.display === '') {
       mycontent.style.display = 'block';
       mybutton.textContent = 'Read Less';
   } else {
       mycontent.style.display = 'none';
       mybutton.textContent = 'Read More';
   }
}
/*READMORE PART ENDS*/


/*CONTACT FORM START*/
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        SecureToken: "8a2b585f-82f5-4921-b043-cb1b53ea4ea6",
        Host: "smtp.elasticemail.com",
        Username: "jokespam2006@gmail.com",
        Password: "4595132A4A902D315779BF833155F85B5606",
        To: 'jokespam2006@gmail.com',
        From: "jokespam2006@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(message => {
        if (message == 'OK') {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    let allValid = true;  

    
    items.forEach(item => {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
            allValid = false;  
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    });

    
    if (email.value === "") {
        const errorTxtEmail = document.querySelector(".error-txt.email");
        errorTxtEmail.innerText = "Email Address can't be blank";
        email.classList.add("error");
        email.parentElement.classList.add("error");
        allValid = false;  
    } else if (!isValidEmail(email.value)) {
        const errorTxtEmail = document.querySelector(".error-txt.email");
        errorTxtEmail.innerText = "Enter a valid email address";
        email.classList.add("error");
        email.parentElement.classList.add("error");
        allValid = false;  
    } else {
        const errorTxtEmail = document.querySelector(".error-txt.email");
        errorTxtEmail.innerText = "";  
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

    return allValid;  
}

function isValidEmail(emailValue) {
    const emailRegex = /^[a-z\d.-]+@[a-z\d.-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    return emailRegex.test(emailValue);  

form.addEventListener("submit", (e) => {
    e.preventDefault();  

    const allValid = checkInputs(); 
    
    if (allValid) {
        sendEmail();  
    }

    form.reset();  
    return false; 
});


document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("keyup", () => {
        if (item.value !== "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        } else {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
    });
});

// Add keyup event listener for real-time email validation
const emailInput = document.querySelector(".email");
if (emailInput) {
    emailInput.addEventListener("keyup", () => {
        checkInputs();  // Check email format and all fields on keyup
    });
};
