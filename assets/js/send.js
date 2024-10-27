const form = document.getElementById("contact-form");

function setResponseText(text) {
    document.getElementById("form-response").innerText = text;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    setResponseText("Please Wait, Sending message..");
    var msg = sendMessage();
});

function isValidEmail(email) {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test(email);
}

function sendMessage() {
    let name = document.getElementById("Email").value;
    let email = document.getElementById("Name").value;
    let phone = document.getElementById("Phone").value;
    let message = document.getElementById("Message").value;


    // //Body of the Request.
    let data = new FormData();
    data.set('Name', name);
    data.set('Email', email);
    data.set('Message', message);
    data.set('Phone', phone);

    let pg = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycby-UqA2Ecr1nzUPcMfUeSu_U5eLOTo21ul1mJaSFlHv-A7eSE_GC5F1X_gRuh0nzr7esg/exec', true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
        setResponseText("Thank You for sending Message.");
        setTimeout(function () {
        resetTheForm();
     }, 2000);
    }
    }
    xhr.onerror = function(){
        setResponseText("Somthing error, Try again");
    }
    xhr.send(pg);
    return true;
}

function resetTheForm() {
    //for empty all values
    setResponseText("");
    document.getElementById("Email").value = "";
    document.getElementById("Message").value = "";
    document.getElementById("Phone").value = "";
    document.getElementById("Message").value = "";
}