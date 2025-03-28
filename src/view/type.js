   const text=`<div>
    <nav id="nav"></nav>
    <nav class="flex flex-col items-center">
      <div>
        <div>
          <form
            id="form"
            action="javascript:void(0);"
            class="flex flex-col gap-8 items-center shadow p-4 rounded-sm"
          >
            <div class="w-full">
              nivel:
              <input
                id="name"
                class="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              />
            </div>
            <div>
              monedas:
              <input
                id="money"
                class="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
              />
            </div>
            <div>
              <button
                id="submit"
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>

    <div class="flex justify-center m-2">
      <table
        id="table"
        class="md:w-[80%] max-md:w-full mt-8 table-auto text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-100 h-12 text-center"
        >
          <tr>
            <td>acion</td>
            <td>Nombre</td>
            <td>moneda</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>`
  export default text
