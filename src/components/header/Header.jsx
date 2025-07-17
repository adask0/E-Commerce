import React, {useEffect, useState} from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {

     const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    const menus = [
        { name: "Strona Główna", path: '/' },
        { name: "Lista Produktów", path: 'lista-produktów' },
        { name: "Koszyk", path: '/' },
        { name: "Podsumowanie", path: '/' },
        { name: "FAQ", path: '/' },
        { name: "Kontakt", path: '/' }
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className="flex items-center justify-between p-4 bg-gray-900 text-white font-[Roboto];">
            <div className="text-xl font-bold">ElectroMarket</div>
                {isMobile ? (
                    <div>
                        <button className="text-[25px]">☰</button>
                    </div>
                ) : (
                    <ul className="flex space-x-6 sm:text-[10px] xl:text-[20px]">
                        {menus.map((menu, index) =>
                            <li key={index} className="hover:cursor-pointer">
                                <Link to={menu.path}>{menu.name}</Link>
                            </li>
                            )
                        }
                    </ul>
                )}
            <div className="flex space-x-4">
                <div className="bg-blue-500 px-4 py-2 rounded cursor-pointer hover:bg-blue-400">Logowanie</div>
                <div className="bg-green-500 px-4 py-2 rounded cursor-pointer hover:bg-green-400">Rejestracja</div>
            </div>
        </div>
    )
}

export default Header
