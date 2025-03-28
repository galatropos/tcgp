import view from "../view/card.js"
const init=(app)=>{
  app.innerHTML=view
  document.title = "Cartas"

const submit = document.getElementById("submit");
const name = document.getElementById("name");
const no = document.getElementById("no");
const selectExpansion = document.getElementById("selectExpansion");
const selectType = document.getElementById("selectType");
const table = document.getElementById("table");
let optionType;
let optionExpansion;

const expansionStorage = localStorage.getItem("expansion") || "[]";
const espansionSet = new Set(JSON.parse(expansionStorage));
const typeObject = new Object(JSON.parse(localStorage.getItem("type")));
let cardObject = new Object(JSON.parse(localStorage.getItem("card")));


let filter=Object.entries(cardObject).sort( ([_,a], [__,b])=>(a.expansion.localeCompare(b.expansion) || a.no.localeCompare(b.no)));
cardObject=Object.fromEntries(filter)

espansionSet.forEach((name, e, s, i) => {
  const entries = espansionSet.entries().next().value[0];

  const option = document.createElement("option");
  const textInput = document.createTextNode(name);
  option.appendChild(textInput);
  option.setAttribute("value", name);
  option.setAttribute("name", "optionExpansion");
  if (name === entries) {
    option.setAttribute("selected", "selected");
    optionExpansion = name;
  }

  selectExpansion.append(option);
});

Object.keys(typeObject).forEach((name, i) => {
  const option = document.createElement("option");
  const textInput = document.createTextNode(name);
  option.appendChild(textInput);
  option.setAttribute("value", name);
  if (i === 0) {
    option.setAttribute("selected", "selected");
    optionType = name;
  }
  option.setAttribute("name", "optionSelect");

  selectType.append(option);
});

Object.keys(cardObject).forEach((id) => {
  const { expansion, type, name, no } = cardObject[id];

  const textName = document.createTextNode(name);
  const textexpansion = document.createTextNode(expansion);
  const textType = document.createTextNode(type);
  const textNo = document.createTextNode(no);
  const textInput = document.createTextNode("eliminar");

  const tr = document.createElement("tr");
  tr.classList.add("h-12", "hover:bg-gray-100", "text-center");

  let nameElement = document.createElement("td");
  nameElement.appendChild(textName);

  let noElement = document.createElement("td");
  noElement.appendChild(textNo);

  let typeElement = document.createElement("td");
  typeElement.appendChild(textType);

  let expansionElement = document.createElement("td");
  expansionElement.appendChild(textexpansion);

  const deleteInput = document.createElement("button");
  let deleteElement = document.createElement("td");
  deleteElement.appendChild(deleteInput);
  deleteInput.appendChild(textInput);
  deleteInput.addEventListener("click", () => eliminar(id));

  deleteInput.classList.add("cursor-pointer", "hover:text-green-500");

  deleteInput.setAttribute("id", no);

  tr.append(
    deleteElement,
    noElement,
    nameElement,
    expansionElement,
    typeElement
  );

  table.appendChild(tr);
});

const onAction = () => {
  if (no.value !== "" && name.value !== "") {
    cardObject[no.value + optionExpansion] = {
      expansion: optionExpansion,
      type: optionType,
      no: no.value,
      name: name.value,
    };

    localStorage.setItem("card", JSON.stringify(cardObject));
    location.reload();
  }
};

form.addEventListener("submit", onAction);

submit.addEventListener("click", onAction);

selectExpansion.addEventListener("change", ({ target }) => {
  optionExpansion = target.value;
});

selectType.addEventListener("change", ({ target }) => {
  optionType = target.value;
});

const eliminar = (id ) => {
    delete cardObject[id];
  localStorage.setItem("card", JSON.stringify(cardObject));

  location.reload();
};

}
export default init