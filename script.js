let api = `https://v6.exchangerate-api.com/v6/6ee418975b81ae64c49e2067/latest/USD`;

const fromDropDown = document.querySelector("#currency_select_main");
const toDropDown = document.querySelector("#currency_select");

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

fromDropDown.value = "BRL";
toDropDown.value = "USD";

let convertCurrency = () => {
  const valor = document.querySelector(".input_currency").value;
  const moeda_p_converter = fromDropDown.value;
  const moeda_convertida = toDropDown.value;
  const result = document.querySelector(".currency_value");
  //Se o campo de entrada não tiver valor = vazio

  if (valor != 0) {
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        let taxa_moeda_principal = data.conversion_rates[moeda_p_converter];
        let taxa_moeda_secundaria = data.conversion_rates[moeda_convertida];

        const convertendoValor =
          (valor / taxa_moeda_principal) * taxa_moeda_secundaria;

        result.innerHTML = `${valor} ${moeda_p_converter} = ${convertendoValor.toFixed(
          2
        )} ${moeda_convertida}`;
      })
      .catch((err) => console.log(err));
  } else {
    alert("Por favor, preencha algum valor");
  }
};
function changeCurrencyToMain() {
  const currency_name_main = document.querySelector("#currency_name_main");
  const currency_img_main = document.querySelector("#currency_img_main");
  const currency_name = document.querySelector("#currency_name");
  const currency_img = document.querySelector("#currency_img");

  if (currency_select_main.value == "USD") {
    currency_name_main.innerHTML = "Dólar americano";
    currency_img_main.src =
      "/projeto1CursoJs/assets/currentys/estados-unidos (1) 1.png";
  }
  if (currency_select_main.value == "EUR") {
    currency_name_main.innerHTML = "Euro";
    currency_img_main.src =
      "/projeto1CursoJs/assets/currentys/Design sem nome 3.png";
  }
  if (currency_select_main.value == "BRL") {
    currency_name_main.innerHTML = "Real";
    currency_img_main.src = "/projeto1CursoJs/assets/currentys/brasil 2.png";
  }

  if (currency_select.value == "USD") {
    currency_name.innerHTML = "Dólar americano";
    currency_img.src =
      "/projeto1CursoJs/assets/currentys/estados-unidos (1) 1.png";
  }
  if (currency_select.value == "EUR") {
    currency_name.innerHTML = "Euro";
    currency_img.src =
      "/projeto1CursoJs/assets/currentys/Design sem nome 3.png";
  }
  if (currency_select.value == "BRL") {
    currency_name.innerHTML = "Real";
    currency_img.src = "/projeto1CursoJs/assets/currentys/brasil 2.png";
  }
}

console.log(`${currency_select_main.value}`);
document
  .querySelector(".btn")
  .addEventListener("click", convertCurrency, changeCurrencyToMain);
window.addEventListener("load", convertCurrency, changeCurrencyToMain);
