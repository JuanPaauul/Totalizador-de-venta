const form = document.querySelector("#register");
const cant = document.querySelector("#cant-items");
const price = document.querySelector("#precio-items");
function calculateTot(a,b){
    return a*b;
}
form.addEventListener("submit", (event) => {

    var msg= "La cantidad registrada de items es: ";
    var msgPrice = "El precio del producto es: ";
    var msgTotalprice= "El precio total del pedido sin impuestos ni descuentos es: "
    
    alert(msg + cant.value +"\n" + msgPrice + price.value+ "\n"+ msgTotalprice+calculateTot(cant.value,price.value));

    


});