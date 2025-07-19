import { useState } from 'react';

function ProductsSearch({ selectedCategories, setSelectedCategories }) {
    const [expandedCategories, setExpandedCategories] = useState({});

    const categories = [
        {
            name: "Komputery",
            id: 'computers',
            subcategories: ["Komputery stacjonarne", "Mini PC", "Workstations"]
        },
        {
            name: "Laptopy",
            id: 'laptops',
            subcategories: ["Laptopy biznesowe", "Laptopy gamingowe"]
        },
        {
            name: "Smartfony i smartwatche",
            id: 'smartphones',
            subcategories: ["Smartfony i telefony (887)", "Tablety (422)", "Inteligentne zegarki (1606)", "Czytniki ebook (27)", "Ochrona na telefon (3105)"]
        },
        {
            name: "Karty pamięci microSD",
            id: 'memory-cards',
            subcategories: ["MicroSD 32GB", "MicroSD 64GB", "MicroSD 128GB", "MicroSD 256GB", "Adaptery SD"]
        },
        {
            name: "Słuchawki True Wireless",
            id: 'wireless-headphones',
            subcategories: ["Słuchawki douszne", "Słuchawki nauszne", "Słuchawki gamingowe", "Słuchawki sportowe", "Etui i akcesoria"]
        },
        {
            name: "Akcesoria GSM",
            id: 'gsm-accessories',
            subcategories: ["Etui i pokrowce", "Szkła ochronne", "Folie ochronne", "Uchwyty samochodowe", "Selfie stick"]
        },
        {
            name: "Akcesoria do tabletów",
            id: 'tablet-accessories',
            subcategories: ["Etui do tabletów", "Klawiatury", "Rysiki", "Podstawki", "Folie ochronne"]
        },
        {
            name: "Pamięci flash",
            id: 'flash-memory',
            subcategories: ["Pendrive USB 3.0", "Pendrive USB-C", "Pendrive mini", "Pamięci OTG", "Pendrive wodoodporne"]
        },
        {
            name: "Podzespoły komputerowe",
            id: 'computer-components',
            subcategories: ["Procesory", "Karty graficzne", "Płyty główne", "Pamięci RAM", "Dyski SSD"]
        },
        {
            name: "Gaming i streaming",
            id: 'gaming-streaming',
            subcategories: ["Konsole", "Kontrolery", "Mikrofony", "Kamery", "Oświetlenie LED"]
        }
    ];

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    const toggleSelection = (categoryId, subcategory = null) => {
        const key = subcategory ? `${categoryId}-${subcategory}` : categoryId;
        setSelectedCategories(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="w-full md:w-80 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Kategorie</h2>
            </div>
            <div className="p-4 space-y-2">
                {categories.map((category) => (
                    <div key={category.id} className="border-b border-gray-100 pb-2">
                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer flex-1">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories[category.id] || false}
                                    onChange={() => toggleSelection(category.id)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                                />
                                <span className="text-sm text-gray-700 font-medium">{category.name}</span>
                            </label>
                            <button
                                onClick={() => toggleCategory(category.id)}
                                className="p-1 text-gray-400 hover:text-gray-600"
                            >
                                <svg
                                    className={`w-4 h-4 transform transition-transform ${
                                        expandedCategories[category.id] ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        {expandedCategories[category.id] && (
                            <div className="ml-7 mt-2 space-y-1">
                                {category.subcategories.map((subcategory, index) => (
                                    <label key={index} className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories[`${category.id}-${subcategory}`] || false}
                                            onChange={() => toggleSelection(category.id, subcategory)}
                                            className="w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
                                        />
                                        <span className="text-xs text-gray-600">{subcategory}</span>
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsSearch
