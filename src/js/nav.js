const route=(e,href)=>{
    e.preventDefault()
    location.href=`#/${href}`
location.reload()

}
const nav=document.getElementById("nav")
nav.classList.add("flex","justify-center","mb-2","gap-2","border-x-none")
const dataNav=[
    {href:"",text:"Inicio"},
    {href:"expansion",text:"Expansiones"},
    {href:"card",text:"Cartas"},
    {href:"type",text:"Tipo"},
]
dataNav.forEach(e=>{
    const {href,text}=e

    const  elementA= document.createElement("a")
    elementA.appendChild(document.createTextNode(text));
    elementA.addEventListener("click",(e)=>route(e,href))
    elementA.classList.add("border","border-x-0","border-t-0","p-2","mb-8","cursor-pointer")
    nav.append(elementA)
})
