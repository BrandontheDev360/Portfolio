var form = document.getElementById("my-form");

async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
    console.log(response)
}).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    console.log(error)
});
}
form.addEventListener("submit", handleSubmit)

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};   
formbutton("create", {
    action: "https://formspree.io/f/xknkdqkw",
    title: "How can I help?",
    fields: [
    { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
    },
    {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
    },
    { type: "submit" }      
    ],
    styles: {
    title: {
        backgroundColor: "#24ae8f"
    },
    button: {
        backgroundColor: "#24ae8f"
    }
    }
});
