import { useContext } from 'react'
import { CheckoutContext } from '../../context/Context'

export default function Summary () {
    const [products, setCheckout] = useContext(CheckoutContext);

    const groupedProducts = products.reduce((acc, product) => {
        const existingProduct = acc.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            acc.push({ ...product, quantity: 1 });
        }
        return acc;
    }, []);

    return (
        <div className='flex w-[50%] flex-col'>
            <div className='flex flex-row justify-between w-full mb-[3rem]'>
                <p><span>Koszyk</span> ({products.length} {products.length === 1 ? 'produkt' : products.length >= 2 ? 'produkty' : 'produktów'})</p>
                <button onClick={() => setCheckout([])}>🗑 Wyczyść koszyk</button>
            </div>
            <div className='bg-gray-300 p-5'>
                {groupedProducts.map((product) => (
                    <div key={product.id} className='flex flex-row justify-between'>
                        <div className='flex flex-row w-[70%]'>
                            <div className='p-2'>{product.image}</div>
                            <div className='p-2'>{product.name}</div>
                        </div>
                        <div className='flex flex-row w-[30%]'>
                            <div className='p-2'>Ilość: {product.quantity}</div>
                            <div className='p-2'>{product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
