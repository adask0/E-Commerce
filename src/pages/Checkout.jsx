import GoPay from "./Checkout/GoPay";
import Summary from "./Checkout/Summary";

export default function Checkout () {
    return(
        <div className="flex flex-col lg:flex-row w-[80vw] mt-[10rem] ml-auto mr-auto mb-[10rem] justify-between">
            <Summary/>
            <GoPay/>
        </div>
    )
}
