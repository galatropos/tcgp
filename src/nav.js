const nav=document.getElementById("nav")
nav.classList.add("flex","justify-center","mb-2","gap-2","border-x-none")
const dataNav=[
    {href:"/index/",text:"Home"},
    {href:"/expansion/",text:"Expansiones"},
    {href:"/card/",text:"Cartas"},
    {href:"/type/",text:"Type"},
]
dataNav.forEach(e=>{
    const {href,text}=e

    const  elementA= document.createElement("a")
    elementA.appendChild(document.createTextNode(text));
    elementA.setAttribute("href",href);
    elementA.classList.add("border","border-x-0","border-t-0","p-2","mb-8")
    nav.append(elementA)
})
