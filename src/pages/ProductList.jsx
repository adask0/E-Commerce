import { useState, useEffect } from "react";
import ProductsSearch from "./ProductList/ProductSearch";
import Products from "./ProductList/Products";
import productsData from "../products.json";

export default function ProductList() {
    const [sortBy, setSortBy] = useState("popularity");
    const [selectedCategories, setSelectedCategories] = useState({});
    const [filteredAndSortedProducts, setFilteredAndSortedProducts] = useState(productsData);

    const categoryMapping = {
        "Komputery": "computers",
        "Laptopy": "laptops", 
        "Smartfony i smartwatche": "smartphones",
        "Karty pamięci microSD": "memory-cards",
        "Słuchawki True Wireless": "wireless-headphones",
        "Akcesoria GSM": "gsm-accessories",
        "Akcesoria do tabletów": "tablet-accessories",
        "Pamięci flash": "flash-memory",
        "Podzespoły komputerowe": "computer-components",
        "Gaming i streaming": "gaming-streaming"
    };

    const subcategoryMapping = {
        "Smartfony i telefony": "Smartfony i telefony (887)",
        "Tablety": "Tablety (422)", 
        "Inteligentne zegarki": "Inteligentne zegarki (1606)",
        "Czytniki ebook": "Czytniki ebook (27)",
        "Ochrona na telefon": "Ochrona na telefon (3105)"
    };

    const getFilteredProducts = () => {
        if (Object.keys(selectedCategories).length === 0) return productsData;
        
        return productsData.filter(product => {
            const categoryKey = categoryMapping[product.category];
            if (!categoryKey) return false;

            if (selectedCategories[categoryKey]) return true;
            
            const subcategoryKey = `${categoryKey}-${product.subcategory}`;
            if (selectedCategories[subcategoryKey]) return true;
            
            const mappedSubcategory = subcategoryMapping[product.subcategory];
            if (mappedSubcategory) {
                const mappedSubcategoryKey = `${categoryKey}-${mappedSubcategory}`;
                if (selectedCategories[mappedSubcategoryKey]) return true;
            }
            
            return false;
        });
    };

    useEffect(() => {
        const filtered = getFilteredProducts();
        const getPrice = (priceString) => parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.'));
        
        const sortArray = (type, products) => {
            const types = {
                "popularity": "reviews",
                "lower-price": "price",
                "higher-price": "price", 
                "rating": "rating"
            };
            
            const sortProperty = types[type];
            
            if (type === "higher-price") {
                return [...products].sort((a, b) => getPrice(b.price) - getPrice(a.price));
            } else if (type === "lower-price") {
                return [...products].sort((a, b) => getPrice(a.price) - getPrice(b.price));
            } else {
                return [...products].sort((a, b) => b[sortProperty] - a[sortProperty]);
            }
        };
        
        const sorted = sortArray(sortBy, filtered);
        setFilteredAndSortedProducts(sorted);
        
    }, [sortBy, selectedCategories]);

    return (
        <div className="flex flex-col justify-center md:flex-row xl:flex-row md:justify-between w-full xl:w-[80vw] m-auto mt-[2rem] p-[2rem]">
            <ProductsSearch 
                selectedCategories={selectedCategories} 
                setSelectedCategories={setSelectedCategories} 
            />
            <Products 
                products={filteredAndSortedProducts}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
        </div>
    );
}