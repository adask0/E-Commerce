import React from "react";
import desktopIcon from "../../assets/desktop.svg";
import monitorIcon from "../../assets/monitor.svg";
import accessoriesIcon from "../../assets/accesories.svg";
import laptopIcon from "../../assets/laptop.svg";
import componentsIcon from "../../assets/components.svg";

const Nav = () => {
    const categories = [
        { icon: desktopIcon, name: "Komputery", alt: "Desktop" },
        { icon: monitorIcon, name: "Monitory", alt: "Monitor" },
        { icon: laptopIcon, name: "Laptopy", alt: "Laptop" },
        { icon: accessoriesIcon, name: "Akcesoria", alt: "Accessories" },
        { icon: componentsIcon, name: "Podzespoły", alt: "Components" }
    ];

    return(
        <div className="flex text-black min-h-75 font-sans justify-center items-center p-4">
            <ul className="
                flex flex-col sm:flex-row
                gap-3 sm:gap-4 lg:gap-6
                text-xs sm:text-sm
                max-w-6xl
                grid-cols-2 sm:grid-cols-none
            ">
                {categories.map((category, index) => (
                    <li key={index} className="
                        flex bg-blue-100
                        w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36
                        rounded-full
                        p-2 sm:p-3
                        items-center justify-center flex-col
                        cursor-pointer
                        hover:bg-blue-300 hover:scale-105
                        transition-all duration-300
                        shadow-md hover:shadow-lg
                    ">
                        <img
                            src={category.icon}
                            alt={category.alt}
                            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-1"
                        />
                        <p className="text-center leading-tight">{category.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Nav
