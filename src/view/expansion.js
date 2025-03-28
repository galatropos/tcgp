     const text=`<div class="flex flex-col items-center gap-8 ">
        <nav  class="flex flex-col items-center gap-8 ">
            <nav id="nav" ></nav>
        <div>
            <form id="form" action="javascript:void(0);" class="flex flex-col gap-4 items-center shadow p-4 rounded-sm">
                <div class="w-full">
                    nombre:
                    <input id="name" name="nombre" 
                    class="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                    
                    />
                </div>
                <button   
                id="submit" 
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                type="submit">
                
                Agregar </button>
                
            </form>

        </div>
    </div>

    <div class="flex justify-center m-2">

        <table id="table" class=" mt-8 w-[80%] shadow table-fixed p-2 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-100 h-12 text-center">
                <tr><td>acion</td> <td>Nombre</td></tr>
            </thead>
        </table>
    </div>`
    export default text

    





