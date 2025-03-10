
   const text=`<div class="flex items-center flex-col">
        <div class="flex flex-col items-center gap-8 ">
            <nav  class="flex flex-col items-center gap-8 ">
                <nav id="nav" ></nav>

            <div>
                <form id="form" action="javascript:void(0);" class="flex flex-col gap-8 items-center shadow p-4 rounded-sm ">
                    <div class="w-full">
                        Numero:<input id="no"  
                    class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            />
                    </div>
                    <div class="w-full">
                        Nombre:<input id="name" 
                    class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                            />
                    </div>
                    <div class="w-full">
                        expansion:<select id="selectExpansion" 
                            class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                        > </select>
                    </div>
                    <div class="w-full">
                        Tipo:<select id="selectType"
                    class="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500" 
                    > </select>
                    </div>
                   
                        
                        <button     id="submit" 
                        class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
                        type="submit" 
                        >agregar </button>
                    
                </form>
            </div>
            
        </div>
            <table id="table" class="mt-8  p-8 max-md:w-full md:w-[80%]  table-auto shadow text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs   uppercase  bg-gray-400 text-gray-100 text-center ">
                    <tr class="px-6 py-3"><td>acion</td> <td>No</td><td>Nombre</td><td>expansion</td><td>tipo</td></tr>
                </thead>
            </table>
    </div>`

    export default text   