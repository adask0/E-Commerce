import React from "react";

const Header = () => {
    const menus = [
        { name: "Strona Główna" },
        { name: "Lista Produktów" },
        { name: "Koszyk" },
        { name: "Podsumowanie" },
        { name: "FAQ" },
        { name: "Kontakt" }
    ]
    return(
        <div className="flex items-center justify-between p-4 bg-gray-900 text-white font-[Roboto];">
            <div className="text-xl font-bold">ElectroMarket</div>
            <ul className="flex space-x-6">
                {menus.map((menu, index) =>
                    <li key={index} className="hover:cursor-pointer">
                        {menu.name}
                    </li>
                )
                }
            </ul>
            <div className="flex space-x-4">
                <div className="bg-blue-500 px-4 py-2 rounded cursor-pointer hover:bg-blue-400">Logowanie</div>
                <div className="bg-green-500 px-4 py-2 rounded cursor-pointer hover:bg-green-400">Rejestracja</div>
            </div>
        </div>
    )
}

export default Header
