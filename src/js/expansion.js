import view from "../view/expansion.js"
const init=(app)=>{
  app.innerHTML=view
  document.title = "Expansión"
    const submit=document.getElementById("submit")
const form=document.getElementById("form")
const name=document.getElementById("name")
const table=document.getElementById("table")

const expansionStorage=localStorage.getItem("expansion")||"[]"
const espansionSet=new Set (JSON.parse(expansionStorage))

const eliminar=(id)=>{
    espansionSet.delete(id)
    localStorage.setItem("expansion",JSON.stringify( Array.from(espansionSet)))
    location.reload();

}

espansionSet.forEach(id => {
    const textTd=document.createTextNode(id)
    const textInput=document.createTextNode("eliminar")
    const tr=document.createElement("tr")
    tr.classList.add("h-12","hover:bg-gray-100","text-center")
    const action=document.createElement("td")
    const value=document.createElement("td")
    const input=document.createElement("button",{id})
    input.setAttribute("id",id)
    input.addEventListener("click", ()=>eliminar(id));
    input.setAttribute("tabindex",`-1`)
    input.classList.add("cursor-pointer","hover:text-green-500")
    value.appendChild(textTd)
    input.appendChild(textInput)
    action.appendChild(input)

    tr.append(action,value)

    table.appendChild(tr)
});

const onAction=(e)=>{

    if(name.value!=="")
    {
        espansionSet.add(name.value.toUpperCase())
        localStorage.setItem("expansion",JSON.stringify( Array.from(espansionSet)))
        location.reload();
    }

}

form.addEventListener("submit",onAction)

submit.addEventListener("click",onAction)

}
export default init