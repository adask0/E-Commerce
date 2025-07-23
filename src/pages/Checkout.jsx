import GoPay from "./Checkout/GoPay";
import Summary from "./Checkout/Summary";
import RecommendedProducts from './Checkout/RecommendedProducts'

export default function Checkout () {
    return(
        <div>
            <div className="flex flex-col lg:flex-row w-[80vw] mt-[10rem] ml-auto mr-auto mb-[10rem] justify-between">
                <Summary/>
                <GoPay/>
            </div>
            <RecommendedProducts/>
        </div>
    )
}
