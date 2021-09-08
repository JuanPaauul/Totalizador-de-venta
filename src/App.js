const form = document.querySelector("#register");
const cant = document.querySelector("#cant-items");


form.addEventListener("submit", (event) => {

    var msg= "La cantidad registrada de items es: ";
    
    alert(msg + cant.value  );
    


});