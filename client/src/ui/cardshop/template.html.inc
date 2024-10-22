<div
  class="w-full h-fit md:w-rem20 md:h-rem40 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden grid grid-cols-[min-content,1fr,max-content] grid-rows-[min-content,min-content] md:grid-cols-2 md:grid-rows-[min-content,min-content,min-content] py-15 px-15 md:py-4 md:px-4 gap-6 relative" id="cardshop"
>
  <div
  id="detail" data-filter="{{id}}" value="detail"
    class="w-16 h-24 md:w-full md:h-64 flex justify-center row-start-1 col-span-1 md:col-span-2"
  >
    <img
    
      class="w-16 h-24 md:w-auto md:h-auto"
      src="./src/assets/cardshop/{{image}}"
      alt="Product Image"
      
    />
  </div>
  <img
    src="./src/assets/cardshop/like.svg"
    class="w-6 absolute top-4 right-4 cursor-pointer"
    alt="Like"
    id="like-icon"
  />

  <h5
    class="text-4xl font-bold text-black row-start-2 col-start-2 md:row-start-2 md:col-start-1"
  >
    ${{price}}
  </h5>
  <button
    class="inline-flex items-center px-3 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 row-start-2 col-start-3 md:row-start-2 md:col-start-2 w-fit justify-self-end"
    id="add-to-panier"
    data-filter="{{id}}"
    value="addpanier"
  >
    <img src="./src/assets/cardshop/shopadd.svg" class="w-8" alt="" />
  </button>
  <div class="md:row-start-3 md:col-span-1 md:col-span-2 flex flex-col gap-2">
    <h1 class="text-xl font-bold text-black">{{name}}</h1>
    <p class="text-sm text-gray-500">{{subtitle}}</p>
  </div>
</div>