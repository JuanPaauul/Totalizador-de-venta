const form = document.querySelector("#register");
const cant = document.querySelector("#cant-items");
const price = document.querySelector("#precio-items");
const state = document.querySelector("#codigo-estado");
            /*UT               	6.65%
        	NV               	8.00%
        	TX                	6.25%
        	AL                	4.00%
        	CA                	8.25%*/
function calculateTot(a,b){
    return a*b;
}
//var cod = document.getElementById("producto").value;
function calculateSubTot(priceTot,state){
    var tax;
    switch(state){
        case "UT":
            tax = 0.0665;
            break;
        case "NV":
            tax = 0.08;
            break;
        case "TX":
            tax = 0.0625;
            break;
        case "AL":
            tax = 0.04;
            break;
        case "CA":
            tax = 0.0825;
            break;
        default:
            break;
    }
    return priceTot+(priceTot*tax);
}
form.addEventListener("submit", (event) => {

    var msg= "La cantidad registrada de items es: ";
    var msgPrice = "El precio del producto es: ";
    var msgTotalprice= "El precio total del pedido sin impuestos ni descuentos es: "
    var msgTax = "El precio Subtotal con impuesto es: "
    var tot = calculateTot(cant.value,price.value);
    var subTot = calculateSubTot(tot,state.value);
    alert(msg + cant.value +"\n" + msgPrice + price.value+ "\n"+ msgTotalprice+tot +"\n" +msgTax+subTot);

    


});