
<div class="product flex flex-col md:flex-row items-center gap-25 w-full justify-around">
    <div class="product flex flex-row items-center gap-10 md:gap-29">
        <img class="product-img w-auto h-[77px]" src="src/assets/cardshop/{{image}}" alt="product">
        <p class="product-name text-14 md:text-16 font-700 w-fit md:w-full">{{name}}</p>
    </div>
    <div class="cost w-full md:w-fit flex flex-row md:flex-col justify-between items-center gap-4">
        <p class="price text-20 font-700">{{price}}€</p>
        <div class="quantity flex flex-row  justify-center items-center border border-panier-grey px-5 py-9 rounded-5">
            <img class="minus w-[24px] h-[24px]" src="src/assets/svg/panier/minus.svg">
            <p class="number text-20 font-700">{{stock}}</p>
            <img class="plus w-[24px] h-[24px]" src="src/assets/svg/panier/plus.svg">
        </div>
    </div>
</div>