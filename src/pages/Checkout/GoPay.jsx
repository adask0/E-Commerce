import { useContext } from "react";
import { Link } from "react-router-dom";
import { FinalPrice, CheckoutContext } from "../../context/Context";

export default function GoPay() {
  const [summary] = useContext(CheckoutContext);

  return (
    <div className="flex sm:w-full lg:w-[30%] flex-col bg-white rounded-lg shadow-lg p-6 h-[10rem] mt-[3rem] lg:ml-[5rem] lg:mt-0 justify-between">
      <div className="flex flex-row justify-between items-center">
        <p>Do zapłaty</p>
        <p className="text-2xl font-bold">
          <FinalPrice /> zł
        </p>
      </div>
      {summary == 0 ? (
        <div className="ml-auto mr-auto bg-gray-600 p-2 rounded-[10px] w-full text-white text-center">
          Przejdź do dostawy 🡭
        </div>
      ) : (
        <Link
          to="../podsumowanie"
          className="ml-auto mr-auto bg-green-600 p-2 rounded-[10px] w-full cursor-pointer text-white text-center hover:bg-green-700"
        >
          Przejdź do dostawy 🡭
        </Link>
      )}
    </div>
  );
}
