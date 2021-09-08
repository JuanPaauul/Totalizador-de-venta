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
/*
            1000            	3%
        	3000            	5%
        	7000	        	7%
        	10000          	    10%
        	30000          	    15%
*/
function calculateDiscount(total)
{
    var discount = 0;
    if(total>= 30000){
        discount = 0.15;
    }
    else if(total>= 10000){
        discount = 0.10;
    }
    else if(total>= 7000){
        discount = 0.07;
    }
    else if(total>= 3000){
        diacaunt = 0.05;
    }
    else if(total>= 1000){
        discount = 0.03;
    }
    return (total*discount);
}
form.addEventListener("submit", (event) => {

    var msg= "La cantidad registrada de items es: ";
    var msgPrice = "El precio del producto es: ";
    var msgTotalprice= "El precio total del pedido sin impuestos ni descuentos es: "
    var msgTax = "El precio Subtotal con impuesto es: "
    var msgDiscaunt ="El descuento por su compra es : "
    var tot = calculateTot(cant.value,price.value);
    var subTot = calculateSubTot(tot,state.value);
    var discountTot = calculateDiscount(subTot);
    alert(msg + cant.value + "\n" 
        + msgPrice + price.value+ "\n"
        + msgTotalprice + tot + "\n"
        + msgTax + subTot + "\n"
        + msgDiscaunt + discountTot);
});