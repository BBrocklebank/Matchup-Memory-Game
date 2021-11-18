function sendMail(contactForm) {
    emailjs.send("gmail", "matchup", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert('Submission successful, thank you for your feeback.');
            },
            function (error) {
                console.log("FAILED", error);
                alert('An error has occured, please try again.');
            }
        );
    return false; // To block from loading a new page
}

function submission(submitRequest) {
    emailjs.send("gmail", "matchup-signup", {
            "from_email": submitRequest.emailaddress.value,
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert('Submission successful, thank you for your signing up.');
            },
            function (error) {
                console.log("FAILED", error);
                alert('An error has occured, please try again.');
            }
        );
    return false; // To block from loading a new page
}