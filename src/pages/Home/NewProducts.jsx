import Img from '../../assets/item.png'

export default function NewProducts() {
    const products = [
        {name: 'Gigabyte ASD123AS - 24hz|15.5 cali', category: 'Monitor', src: Img, alt: 'Monitor', price: '500zł'},
        {name: 'Gigabyte ASD123AS - 24hz|15.5 cali', category: 'Monitor', src: Img, alt: 'Monitor', price: '500zł'},
        {name: 'Gigabyte ASD123AS - 24hz|15.5 cali', category: 'Monitor', src: Img, alt: 'Monitor', price: '500zł'},
        {name: 'Gigabyte ASD123AS - 24hz|15.5 cali', category: 'Monitor', src: Img, alt: 'Monitor', price: '500zł'},
        {name: 'Komputer Gamingowy', category: 'Komputer', src: Img, alt: 'Komputer', price: '500zł'},
        {name: 'Komputer Gamingowy', category: 'Komputer', src: Img, alt: 'Komputer', price: '500zł'},
        {name: 'Komputer Gamingowy', category: 'Komputer', src: Img, alt: 'Komputer', price: '500zł'},
        {name: 'Komputer Gamingowy', category: 'Komputer', src: Img, alt: 'Komputer', price: '500zł'},
    ]
    return (
        <div className="w-full lg:w-[60%] mt-[5rem] lg:mt-0">
            <h1 className='text-3xl mb-[2rem] font-bold text-center lg:text-left'>Najnowsze Produkty</h1>
                <div className='h-full grid grid-cols-4 gap-4'>
                {products.map((product, index) => (
                    <div key={index} className='border-1 rounded-2xl flex flex-col justify-center text-center hover:cursor-pointer hover:scale-105 duration-75'>
                        <img src={product.src} alt={product.alt} />
                        <p className='text-[12px] font-bold'>{product.category}</p>
                        <p className='font-sans m-2 font-bold'>{product.name}</p>
                        <p className='font-extrabold'>{product.price}</p>
                    </div>
                ))}
                </div>
        </div>
    )
}
