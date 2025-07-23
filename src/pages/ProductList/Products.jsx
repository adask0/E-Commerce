import { useContext, useEffect } from 'react';
import { CheckoutContext } from '../../context/Context'


function Products({ products, sortBy, setSortBy }) {
    const [checkout, setCheckout] = useContext(CheckoutContext);

    useEffect(() => {
        console.log("Checkout changed:", checkout);
        localStorage.setItem('checkout', JSON.stringify(checkout))
    }, [checkout])

    return (
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 ml-0 md:ml-6">
            <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-800">Produkty ({products.length})</h2>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Sortuj według:</span>
                        <select
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="popularity">Popularność</option>
                            <option value="lower-price">Cena: od najniższej</option>
                            <option value="higher-price">Cena: od najwyższej</option>
                            <option value="rating">Ocena</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
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
                                ])}}>
                                    Dodaj do koszyka
                                </button>
                            </div>
                        </div>

                    ))}
                </div>
                {products.length === 0 && (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Brak produktów spełniających wybrane kryteria</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
