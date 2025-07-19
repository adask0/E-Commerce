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

const FinalPrice = () => {
    const [items] = useContext(CheckoutContext);

    const getPrice = (priceString) => parseFloat(priceString.replace(/[^\d,]/g, '').replace(',', '.'));

    const totalPrice = items.reduce((sum, item) => {
        return sum + getPrice(item.price);
    }, 0);

    return <div>{totalPrice}</div>;
};

export { CheckoutContext, FinalPrice };
export default CheckoutContext;
