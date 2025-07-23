import { useContext, createContext, useState } from "react";

const CheckoutContext = createContext([]);

export const CheckoutProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    return (
        <CheckoutContext.Provider value={[items, setItems]}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const FinalPrice = () => {  // Bez children!
    const [items] = useContext(CheckoutContext);

    const getPrice = (priceString) => parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.'));
    const final = items.reduce((sum, item) => sum + getPrice(item.price), 0);

    return final.toFixed(2);
};


export { CheckoutContext };
export default CheckoutContext;
