import { Link } from "react-router-dom"
import { FinalPrice } from "../../context/Context"

export default function GoPay () {
    return (
        <div className='flex sm:w-full lg:w-[30%] flex-col bg-white rounded-lg shadow-lg p-6 h-[10rem] mt-[3rem] lg:ml-[5rem] lg:mt-0 justify-between'>
            <div className='flex flex-row justify-between items-center'>
                <p>Do zapłaty</p>
                <p className="text-2xl font-bold"><FinalPrice /> zł</p>
            </div>
            <Link className="ml-auto mr-auto bg-green-600 p-2 rounded-[10px] w-full cursor-pointer text-white text-center">Przejdź do dostawy 🡭</Link>
        </div>
    )
}
