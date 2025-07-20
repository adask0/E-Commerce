import Img from '../../assets/item.png'
import productsData from '../../products.json'
import { useState, useEffect, useContext } from 'react';
import { CheckoutContext } from '../../context/Context';

export default function NewProducts() {
    const [latestProducts, setLatestProducts] = useState([]);
    const [checkout, setCheckout] = useContext(CheckoutContext);

    useEffect(() => {
        const sorted = [...productsData].sort((a, b) =>
            new Date(b.dateAdded) - new Date(a.dateAdded)
        );

        const latest = sorted.slice(0, 8);
        setLatestProducts(latest);

    }, []);

    return (
        <div className="w-full lg:w-[60%] mt-[5rem] lg:mt-0">
            <h1 className='text-3xl mb-[2rem] font-bold text-center lg:text-left'>Najnowsze Produkty</h1>
                <div className='h-full grid grid-cols-4 gap-4'>
                    {latestProducts.map((product) => (
                        <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className="text-center mb-3 flex-1">
                                <div className="text-4xl mb-2">{product.image}</div>
                                <h3 className="font-semibold text-gray-800 text-sm mb-1">{product.name}</h3>
                                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                                <p className="text-xs text-gray-400 mb-2">{product.subcategory}</p>
                            </div>
                            <div className="flex items-center justify-center mb-2">
                                <div className="flex items-center">
                                    <span className="text-yellow-400 text-sm mr-1">★</span>
                                    <span className="text-sm text-gray-600">{product.rating}</span>
                                    <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                                </div>
                            </div>
                            <div className="text-center mt-auto">
                                <p className="text-lg font-bold text-blue-600 mb-3">{product.price}</p>
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm transition-colors" onClick={() => {
                                    setCheckout([
                                        ...checkout,
                                        {
                                            "id": product.id,
                                            "name": product.name,
                                            "price": product.price,
                                            "image": product.image,
                                            "category": product.category,
                                            "subcategory": product.subcategory,
                                            "rating": product.rating,
                                            "reviews": product.reviews,
                                            "dateAdded": product.dateAdded
                                        }
                                    ])
                                }}>
                                    Dodaj do koszyka
                                </button>
                             </div>
                        </div>
                    ))}
                </div>
        </div>
)

}
