// Adding customer's name

var CustomerNameInput = document.getElementById("customerInput");
var toInputSpan = document.getElementById("to_input_id");

CustomerNameInput.addEventListener("input", function(){

    toInputSpan.textContent = CustomerNameInput.value;
})


// var element = document.getElementById("example");
// var content = element.textContent; // Retrieves the text content of the element
// console.log(content);

// Adding Customer contact Number

var CustomerContactInput = document.getElementById("contactInput");
var contactInputSpan = document.getElementById("contact_input_id");

CustomerContactInput.addEventListener("input", function(){
    contactInputSpan.textContent = CustomerContactInput.value;
})


// Adding Invoice

var InvoiceInput = document.getElementById("invoiceInput");
var invoiceInputSpan = document.getElementById("invoice_input_id");

InvoiceInput.addEventListener("input", function() {
    invoiceInputSpan.textContent = InvoiceInput.value;
})


// code for current date
function updateDate() {
    const currentDateElement = document.getElementById("currentDate");
    const now = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = now.toLocaleDateString(undefined, options);
    currentDateElement.textContent = "" + formattedDate;
  }
  
// Update the date initially
updateDate();
  
// Update the date every second (1000 milliseconds)
setInterval(updateDate, 1000);




// Calculating total
let Total = 0;

// Calculating Grand Total
let GrandTotal = 0;

// Adding items list

function addItem() {
    const ProductDiscription = document.getElementById("product_discription_id").value;
    const Quantity = document.getElementById("qty_discription_id").value;
    const Amount = document.getElementById("amount_discription_id").value;

    // place where the input should be insert
    const TableItemsList = document.getElementById("table_items_list");

    //creating a span elements
    const ProductSpan = document.createElement("span"); 
    ProductSpan.textContent = ProductDiscription;
    ProductSpan.classList.add("product");

    const QtySpan = document.createElement("span");
    QtySpan.textContent = Quantity;


    const AmountSpan = document.createElement("span");
    AmountSpan.textContent = Amount;

    //price span (Quantity * Amount)
    const PriceSpan = document.createElement("span");
    let totalPrice = Quantity * Amount;
    PriceSpan.textContent = totalPrice + "/-";

    
    //appending the spans
    TableItemsList.appendChild(ProductSpan);
    TableItemsList.appendChild(QtySpan)
    TableItemsList.appendChild(AmountSpan)
    TableItemsList.appendChild(PriceSpan);
    
    
    // calculating total 
    const TotalOutput = document.getElementById("total_span");
    Total += totalPrice;
    TotalOutput.textContent = Total;


    // calculating Grand Total 
    const GrandTotalOutput = document.getElementById("grand_total_span");
    GrandTotal = Total;
    GrandTotalOutput.textContent = GrandTotal;



  // Clear input fields
  document.getElementById("product_discription_id").value = "";
  document.getElementById("qty_discription_id").value = "";
  document.getElementById("amount_discription_id").value = "";
}

// Adding Shipping charges

var ShippingInput = document.getElementById("shipping_id");
var ShippingInputSpan = document.getElementById("shipping_span");

ShippingInput.addEventListener("input", function() {
  ShippingInputSpan.textContent = ShippingInput.value;

  //updating the shipping charges with grand total
  const GrandTotalOutputWithShippingCharges = document.getElementById("grand_total_span");
  GrandTotal = Total + parseInt(ShippingInput.value);
  GrandTotalOutputWithShippingCharges.textContent = GrandTotal;
})


