const form = document.querySelector("#register");
const cant = document.querySelector("#cant-items");
const price = document.querySelector("#precio-items");

form.addEventListener("submit", (event) => {

    var msg= "La cantidad registrada de items es: ";
    var msgPrice = "El precio del producto es: ";
    alert(msg + cant.value +"\n" + msgPrice + price.value);
    


});