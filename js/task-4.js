const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
 if (email === "" || password === "") {
    alert ("All form fields must be filled in");
    return;
 }
 const formData = {
    email: email,
    password: password,
 };
 console.log(formData);
 form.reset();
});

form.style.width = "408px";
form.style.height = "256px";
form.style.gap = "8px";
form.style.margin = "0 auto";
form.style.padding = "24px";
form.style.opacity = "0px";
form.style.border = "1px solid #808080";
form.style.backgroundColor ="#FFFFFF";

const inputs = form.querySelectorAll("input");
inputs.forEach(input => {
    input.style.width = "360px";
    input.style.height = "40px";
    input.style.gap = "0px";
    input.style.borderRadius = "4px";
    input.style.border = "1px solid #808080";
    input.style.opacity = "0px";
});

const buttonn = form.querySelector("button");
buttonn.style.width = "86px";
buttonn.style.height = "40px";
buttonn.style.padding = "8px";
buttonn.style.margin = "16px 0";
buttonn.style.gap = "10px";
buttonn.style.borderRadius = "8px";
buttonn.style.opacity = "0px";
buttonn.style.backgroundColor ="#4E75FF";


