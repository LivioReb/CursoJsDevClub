const btn = document.querySelector(".btn");
const currency_select = document.querySelector(".currency_select")
console.log(currency_select.value ) 
const currency_select_main = document.querySelector(".currency_select_main")

function convertValues() {
  
  const inputCurrencyValue = document.querySelector(".input_currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency_value_toconvert"
  );
 
  const dolarToday = 5.2;
  const euroToday = 6.2;
  const realToday = 1;

  const currencyValue = document.querySelector(".currency_value");
  const convertedValue = inputCurrencyValue / dolarToday;
  const convertedValueEuro = inputCurrencyValue / euroToday;
  const convertedValueReal = inputCurrencyValue / realToday;
  
  if(currency_select.value == "dolar"){
   
      currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(convertedValue)
  }
  if(currency_select.value == "euro"){  
      currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
      }).format(convertedValueEuro)
  }
  if(currencyValue.value == "real"){
    currencyValue.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BR"
    }).format(convertedValueReal)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)
}

function changeCurrency(){
const currency_name = document.querySelector("#currency_name")
const currency_img = document.querySelector("#currency_img")

if(currency_select.value == "dolar"){
    currency_name.innerHTML = "Dólar americano"
    currency_img.src = "/projeto1CursoJs/assets/currentys/estados-unidos (1) 1.png"
}
if(currency_select.value == "euro"){
    currency_name.innerHTML = "Euro"
    currency_img.src = "/projeto1CursoJs/assets/currentys/Design sem nome 3.png"
}



convertValues()

}


currency_select.addEventListener('change', changeCurrency)

btn.addEventListener("click", convertValues);
