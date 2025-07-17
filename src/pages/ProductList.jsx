import ProductsSearch from "./ProductList/ProductSearch";
import Products from "./ProductList/Products"

export default function ProductList () {
    return(
        <div className="flex sm:flex-col sm:justify-center xl:flex-row xl:justify-between w-full xl:w-[80vw] bg-amber-500 m-auto mt-[2rem]">
            <ProductsSearch/>
            <Products/>
        </div>
    )
}
