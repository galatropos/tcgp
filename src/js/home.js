import view from "../view/home.js"

const init=(app)=>
{
  app.innerHTML=view
  document.title = "Bioenvenido"

      const expansionStorage = localStorage.getItem("expansion") || "[]";
      const typeComplet = new Object(JSON.parse(localStorage.getItem("type")));
      const card = new Object(JSON.parse(localStorage.getItem("card")));
      const expansionComplet = new Set(JSON.parse(expansionStorage));
      const table = document.getElementById("table");
      const noTotal = document.getElementById("noTotal");
      const consumoTotal = document.getElementById("consumoTotal");
      const expansionCont = document.getElementById("expansionCont");
      const dataElement = document.getElementById("data");
      const filterExpansionesElement =
        document.getElementById("filterExpansiones");
      const filterTipoElement = document.getElementById("filterTipo");
      const checkboxExpansion =
        document.getElementsByClassName("expansionClass");
      const checkboxType = document.getElementsByClassName("typeClass");

      const dataOrigin = Object.keys(card).map((key) => {
        const { no, expansion, type,name } = card[key];
        const money = typeComplet[type];
        return {
          name,
          no,
          expansion,
          type,
          money,
        };
      });
      const expansionOrigin = Array.from(
        new Set(dataOrigin.map(({ expansion }) => expansion))
      );
      const typeOrigin = Array.from(
        new Set(dataOrigin.map(({ type }) => type))
      );

      let data = dataOrigin.map((e) => e);
      let expansion = expansionOrigin.map((e) => e);
      let type = typeOrigin.map((e) => e);

      ///// creacion de filter
      const filterExpansion = Array.from(
        new Set(dataOrigin.map(({ expansion }) => expansion))
      );
      const filtertype = Array.from(new Set(dataOrigin.map(({ type }) => type)));

      filtertype.forEach((type) => {
        const elemenType = document.createElement("div");
        elemenType.classList.add( "m-2");
        const labelelemenType = document.createElement("label");
        labelelemenType.classList.add("pr-5");
        labelelemenType.appendChild(document.createTextNode(type));
        const elemenTypeCheckend = document.createElement("input");
        elemenTypeCheckend.setAttribute("type", "checkbox");
        elemenTypeCheckend.setAttribute("checked", "checked");
        elemenTypeCheckend.addEventListener("change",(e)=>checkbox(e))
        elemenTypeCheckend.classList.add("typeClass");
        elemenTypeCheckend.setAttribute("value", type);
        elemenType.append(labelelemenType, elemenTypeCheckend);

        filterTipo.append(elemenType);
      });

      filterExpansion.forEach((expansion) => {
        const elementExpansion = document.createElement("div");
        elementExpansion.classList.add( "m-2");
        const labelelementExpansion = document.createElement("label");
        labelelementExpansion.classList.add("pr-5");
        labelelementExpansion.appendChild(document.createTextNode(expansion));
        const elementExpansionCheckend = document.createElement("input");
        elementExpansionCheckend.setAttribute("type", "checkbox");
        elementExpansionCheckend.setAttribute("checked", "checked");
        elementExpansion.addEventListener("change",(e)=>checkbox(e))
        elementExpansionCheckend.classList.add("expansionClass");
        elementExpansionCheckend.setAttribute("value", expansion);

        elementExpansion.append(
          labelelementExpansion,
          elementExpansionCheckend
        );
        filterExpansiones.append(elementExpansion);
      });

      ////

      const checkbox = (e) => {
        const type = [];
        const expansion = [];
        let data = [];

        for (var i = 0; i < checkboxType.length; i++) {
          const { checked, value } = checkboxType[i];
          if (checkboxType[i].checked) type.push(value);
        }

        for (var i = 0; i < checkboxExpansion.length; i++) {
          const { checked, value } = checkboxExpansion[i];
          if (checkboxExpansion[i].checked) expansion.push(value);
        }
        data = dataOrigin.filter(
          (e) =>
            expansion.find((expansion) => expansion === e.expansion) &&
            type.find((type) => e.type === type)
        );

        createTable(data);

        CreateData(data, expansion);
      };

      const createTable = (data) => {
        table.innerHTML = null;
        data.forEach((e) => {
          const { expansion, money, name, no, type } = e;
          const tr = document.createElement("tr");
          tr.classList.add("h-12","hover:bg-gray-100","text-center")


          const expansionElement = document.createElement("td");
          expansionElement.appendChild(document.createTextNode(expansion));
          expansionElement.classList.add("h-12","hover:bg-gray-100","text-center","px-6", "py-1")


          const moneyElement = document.createElement("td");
          moneyElement.appendChild(document.createTextNode(money));

          const nameElement = document.createElement("td");
          nameElement.appendChild(document.createTextNode(name));

          const noElement = document.createElement("td");
          noElement.appendChild(document.createTextNode(no));

          const typeElement = document.createElement("td");
          typeElement.appendChild(document.createTextNode(type));
          typeElement.classList.add("h-12","hover:bg-gray-100","text-center","px-6", "py-1")


          tr.append(
            noElement,
            nameElement,
            expansionElement,
            typeElement,
            moneyElement
          );
          table.appendChild(tr);
        });

        noTotal.innerHTML = data.length;
        consumoTotal.innerHTML = data.reduce(
          (a, { money: b }) => Number(a) + Number(b),
          0
        );
      };

      const CreateData = (data, expansion) => {
        dataElement.innerHTML = null;
        const ul = document.createElement("ul");
        ul.setAttribute("id", "dataUl");
        ul.classList.add("flex", "flex-row", "flex-wrap", "justify-around", "gap-4"  );
        dataElement.appendChild(ul);
        let expansionVigente = expansion.map((expansion) => {
          const filtroExpansion = data.filter((e) => e.expansion === expansion);
          const consumoExpansion = filtroExpansion.reduce(
            (a, b) => Number(a) + Number(b.money),
            0
          );
          const contExpansion = filtroExpansion.reduce(
            (a, b) => Number(a) + 1,
            0
          );
          const tipoCompleto = Array.from(
            new Set(filtroExpansion.map((e) => e.type))
          );
          const tipo = tipoCompleto.map((tipo) => {
            const filtroTipo = filtroExpansion.filter((e) => e.type === tipo);
            const contTipo = filtroTipo.length;
            const consumoTipo = filtroTipo.reduce(
              (a, { money: b }) => Number(a) + Number(b),
              0
            );

            return {
              tipo,
              contTipo,
              consumoTipo,
            };
          });

          return {
            expansion,
            consumoExpansion,
            contExpansion,
            tipo,
          };
        });

        expansionVigente.forEach((e) => {
          const { consumoExpansion, contExpansion, expansion, tipo } = e;
          const li = document.createElement("li");
          li.classList.add("shadow","p-4", "flex", "flex-col", "no-wrap", "w-fit");
          const consumoExpansionElement = document.createElement("div");
          const contExpansionElement = document.createElement("div");
          const expansionElement = document.createElement("div");
          const tipoElement = document.createElement("div");
          tipoElement.classList.add(
            "flex",
            "flex-col",
            "no-wrap",
            "items-center",
            
          );

          const NombretipoElement = document.createElement("label");
          NombretipoElement.appendChild(document.createTextNode("Tipos:"));
          NombretipoElement.classList.add("tex-lg", "font-bold");
          const UltipoElement = document.createElement("ul");
          UltipoElement.classList.add( "w-fit", "flex","flex-col", "flex-wrap","gap-2","mt-8");
          tipoElement.append(NombretipoElement, UltipoElement);

          consumoExpansionElement.appendChild(
            document.createTextNode(`Consumo:${consumoExpansion}`)
          );
          contExpansionElement.appendChild(
            document.createTextNode(`Total:${contExpansion}`)
          );
          expansionElement.appendChild(
            document.createTextNode(`Expansion:${expansion}`)
          );

          tipo.forEach(({ consumoTipo, contTipo, tipo }) => {
            const liTipo = document.createElement("li");
            liTipo.classList.add("border","border-x-0", "border-y-0","mb-4");
            const consumoTipoElement = document.createElement("div");
            const contTipoElement = document.createElement("div");
            const tipoElement = document.createElement("H2");
            tipoElement.classList.add("text-lg", "font-bold");
            consumoTipoElement.appendChild(
              document.createTextNode(`Consumo:${consumoTipo}`)
            );
            contTipoElement.appendChild(
              document.createTextNode(`Total:${contTipo}`)
            );
            tipoElement.appendChild(document.createTextNode(`${tipo}`));

            liTipo.append(tipoElement, consumoTipoElement, contTipoElement);
            UltipoElement.appendChild(liTipo);
          });

          li.append(
            expansionElement,
            contExpansionElement,
            consumoExpansionElement,
            tipoElement
          );
          ul.appendChild(li);
        });
      };

      CreateData(data, expansion);
      createTable(data);

}
 export default init