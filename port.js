// "Read More" Button Functionality
function changeReadMore() {
    const mycontent = document.getElementById('mybox1id');
    const mybutton = document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none' || mycontent.style.display === '') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Read Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Read More';
    }
}

// Contact Form Functionality
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Function to Send Email
function sendEmail() {
    const bodyMessage = `
        Full Name: ${fullName.value}<br>
        Email: ${email.value}<br>
        Phone Number: ${phone.value}<br>
        Message: ${message.value}
    `;

    Email.send({
        SecureToken: "8a2b585f-82f5-4921-b043-cb1b53ea4ea6", // Replace with a secure server-side implementation
        Host: "smtp.elasticemail.com",
        Username: "jokespam2006@gmail.com",
        Password: "4595132A4A902D315779BF833155F85B5606", // Replace with a secure server-side implementation
        To: 'jokespam2006@gmail.com',
        From: "jokespam2006@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(response => {
        if (response === 'OK') {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Failed to send the message. Please try again.",
                icon: "error"
            });
        }
    });
}

// Validate Form Inputs
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

    // Validate Email Separately
    const errorTxtEmail = document.querySelector(".error-txt.email");
    if (email.value === "") {
        errorTxtEmail.innerText = "Email Address can't be blank";
        email.classList.add("error");
        email.parentElement.classList.add("error");
        allValid = false;
    } else if (!isValidEmail(email.value)) {
        errorTxtEmail.innerText = "Enter a valid email address";
        email.classList.add("error");
        email.parentElement.classList.add("error");
        allValid = false;
    } else {
        errorTxtEmail.innerText = "";
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }

    return allValid;
}

// Helper Function to Validate Email Format
function isValidEmail(emailValue) {
    const emailRegex = /^[a-z\d.-]+@[a-z\d.-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/;
    return emailRegex.test(emailValue);
}

// Handle Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const allValid = checkInputs();
    if (allValid) {
        sendEmail();
        form.reset(); // Reset the form after submission
    }
});

// Real-Time Validation on Keyup
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

// Email Real-Time Validation
email.addEventListener("keyup", () => {
    checkInputs();
});
