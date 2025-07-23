import { useContext } from "react";
import { CheckoutContext } from "../../context/Context";

export default function Summary() {
  const [products, setCheckout] = useContext(CheckoutContext);

  const groupedProducts = products.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    const allProducts = products.filter((p) => p.id !== productId);
    const selectedProduct = products.find((p) => p.id === productId);

    const updatedProducts = [...allProducts];
    for (let i = 0; i < newQuantity; i++) {
      updatedProducts.push(selectedProduct);
    }

    setCheckout(updatedProducts);
  };

  const getPrice = (priceString) =>
    parseFloat(priceString.replace(/[^\d,]/g, "").replace(",", "."));

  const removeProduct = (productId) => {
    setCheckout(products.filter((p) => p.id !== productId));
  };

  return (
    <div className="flex sm:w-full lg:w-[70%] flex-col bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-row justify-between items-center w-full mb-6 pb-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">
          Koszyk ({products.length}{" "}
          {products.length === 1
            ? "produkt"
            : products.length >= 2 && products.length <= 4
            ? "produkty"
            : "produktów"}
          )
        </h2>
        <button
          onClick={() => setCheckout([])}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
        >
          🗑 Wyczyść koszyk
        </button>
      </div>

      <div className="space-y-4">
        {groupedProducts.length > 0 ? (
          groupedProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-white rounded-lg p-3 w-16 h-16 flex items-center justify-center text-2xl shadow-sm border border-gray-200">
                  {product.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-xs text-gray-400">{product.subcategory}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor={`quantity-${product.id}`}
                    className="text-sm font-medium text-gray-700"
                  >
                    Ilość:
                  </label>
                  <select
                    id={`quantity-${product.id}`}
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                    className="border border-gray-300 rounded-md px-3 py-1 text-center min-w-[60px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-right">
                  <p className="text-lg font-bold text-blue-600">
                    {(getPrice(product.price) * product.quantity).toFixed(2)} zł
                  </p>
                  <p className="text-xs text-gray-500">za sztukę</p>
                </div>

                <button
                  onClick={() => removeProduct(product.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition-colors duration-200"
                  title="Usuń produkt"
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-500 mb-2">Twój koszyk jest pusty</p>
            <p className="text-gray-400">
              Dodaj produkty, aby kontynuować zakupy
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
