   const text=`<div class="md:px-[10%] max-md:px-2 w-screen "  >

      <nav id="nav"></nav>
  
      <div class="w-full  flex flex-col items-center flex-wrap ">
        <div class="w-full text-center"></div>
        <div class=" w-full flex justify-evenly">
          <div class="flex flex-col shadow items-center w-[40vw]">
            <div>expansiones</div>
            <div class="flex flex-wrap" id="filterExpansiones"></div>
          </div>
          <div class="flex flex-col shadow items-center w-[40vw]">
            <div>Tipo</div>
            <div class="flex flex-wrap" id="filterTipo"></div>
          </div>
        </div>
      </div>
  
      <div class="flex justify-around mt-14  sm:flex-row flex-col items-start w-fit ">
        <div class="sm:w-[50vw] w-[99vw]   ">
          <div class="flex justify-center m-2 flex-col items-center ">
            <div class="flex flex-row p-2 gap-2">
              <div class="flex gap-2 ">
                <label>no:</label>
                <label id="noTotal"></label>
              </div>
              <div class="flex gap-2 ">
                <label>Consumo:</label>
                <label id="consumoTotal"></label>
              </div>
            </div>
            <div class="flex shadow w-full overflow-auto">
              <table
              class="w-full table-auto  text-sm text-left text-gray-500 dark:text-gray-400"
              >
              <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-100 h-12 text-center"
              >
              <tr >
                <td class="px-6 py-3">Número</td>
                <td>Nombre</td>
                <td>Expansión</td>
                <td>Tipo</td>
                <td class="pr-2">Costo</td>
              </tr>
            </thead>
            <tbody id="table"></tbody>
          </table>
        </div>

        </div>
        </div>
        <div id="data" class="sm:w-[50vw] w-[99vw]  flex justify-center items-center flex-wrap  ">
        
          </div>
      </div>

    </div>
  </div>`
  export default text
