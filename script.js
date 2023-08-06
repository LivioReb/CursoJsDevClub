let api = `https://v6.exchangerate-api.com/v6/6ee418975b81ae64c49e2067/latest/USD`;

const fromDropDown = document.querySelector("#currency_select_main")
const toDropDown = document.querySelector("#currency_select")


currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "BRL"
toDropDown.value = "USD"

let convertCurrency = () =>{
  const valor = document.querySelector(".input_currency");
  const moeda_p_converter = fromDropDown.value;
  const moeda_convertida = toDropDown.value;
  const result = document.querySelector(".currency_value")
  //Se o campo de entrada não tiver valor = vazio

  if(valor != 0){
    fetch(api)
    .then ((resp) => resp.json())
    .then((data) =>{
      let taxa_moeda_principal = data.conversion_rates[moeda_p_converter];
      let taxa_moeda_secundaria = data.conversion_rates[moeda_convertida]

      const convertendoValor = (valor/taxa_moeda_principal) * moeda_convertida
      result.innerHTML = `${valor} ${moeda_p_converter} = ${convertendoValor.toFixed(2)} ${moeda_convertida}`
    })
    .catch((err) => console.log(err))
  }
  else {
    alert.("Por favor, preencha algum valor")
  }
};

document.querySelector(".btn").addEventListener("click", convertCurrency)
window.addEventListener("load", convertCurrency)






