import view from "../view/type.js"
const init=(app)=>{
  app.innerHTML=view
  document.title = "Nivel"
  const submit = document.getElementById("submit");
const name = document.getElementById("name");
const money = document.getElementById("money");
const table = document.getElementById("table");

const typeObject = new Object(JSON.parse(localStorage.getItem("type")));

const eliminar = ( {id} ) => {
    delete typeObject[id];
    localStorage.setItem("type", JSON.stringify(typeObject));
    location.reload();
  };

Object.keys(typeObject).forEach((name) => {
  const money = typeObject[name];
  const textName = document.createTextNode(name);
  const textMoney = document.createTextNode(money);
  const textInput = document.createTextNode("eliminar");
  const tr = document.createElement("tr");
  tr.classList.add("h-12", "hover:bg-gray-100", "text-center");
  let nameElement = document.createElement("td");
  nameElement.appendChild(textName);

  let moneyElement = document.createElement("td");
  moneyElement.appendChild(textMoney);

  const deleteInput = document.createElement("button");
  let deleteElement = document.createElement("td");
  deleteElement.appendChild(deleteInput);
  deleteInput.appendChild(textInput);
  deleteInput.addEventListener("click", ({target})=>eliminar(target));
  deleteInput.setAttribute("id", name);
  deleteInput.classList.add("cursor-pointer", "hover:text-green-500");

  tr.append(deleteElement, nameElement, moneyElement);

  table.appendChild(tr);
});

const onAction = () => {
  money.value = Number(money.value);
  if (name.value !== "" && (!isNaN(money.value) || money.value === 0)) {
    typeObject[name.value.toUpperCase()] = money.value;
    localStorage.setItem("type", JSON.stringify(typeObject));
    location.reload();
  }
};
form.addEventListener("submit", onAction);

submit.addEventListener("click", onAction);

}
export default init

