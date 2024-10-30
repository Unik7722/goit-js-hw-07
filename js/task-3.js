const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", () => {
   const trimValue = inputEl.value.trim();
    
    if (trimValue !== " "){
        spanEl.textContent = trimValue;   
    } else{
        spanEl.textContent = "Anonymous";     
    }

});
