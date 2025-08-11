import React, { use, useState } from "react";

export default function Pay() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [rules, setRules] = useState(false);
  const [news, setNews] = useState(false);

  const selectAll = () => {
    if (rules === false || news === false) {
      setRules(true);
      setNews(true);
    } else {
      setRules(false);
      setNews(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[80vw] mt-[10rem] ml-auto mr-auto mb-[10rem] justify-between">
        <form className="flex sm:w-full flex-row flex-wrap bg-white rounded-lg shadow-lg p-6">
          <label className="p-2 w-full text-2xl font-bold text-gray-800">
            Uzupełnij dane
          </label>
          <input
            className="m-2 p-2 w-[45%] border-2 rounded-lg"
            type="text"
            value={name}
            placeholder="Imię"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[45%] border-2 rounded-lg"
            type="text"
            value={lastName}
            placeholder="Nazwisko"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[45%] border-2 rounded-lg"
            type="email"
            value={email}
            placeholder="Adres Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[45%] border-2 rounded-lg"
            type="tel"
            value={phoneNumber}
            placeholder="Numer Telefonu"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[65%] border-2 rounded-lg"
            type="text"
            name="street-address"
            value={street}
            autoComplete="street-address"
            placeholder="Ulica"
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[25%] border-2 rounded-lg"
            type="text"
            name="street-number"
            value={houseNumber}
            autoComplete="address-line2"
            placeholder="Nr domu/lokalu"
            onChange={(e) => setHouseNumber(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[25%] border-2 rounded-lg"
            type="text"
            name="postal-code"
            value={postalCode}
            autoComplete="postal-code"
            placeholder="Kod pocztowy"
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            className="m-2 p-2 w-[65%] border-2 rounded-lg"
            type="text"
            name="city"
            value={city}
            autoComplete="address-level2"
            placeholder="Miejscowość"
            onChange={(e) => setCity(e.target.value)}
          />
          <label className="p-2 w-full text-2xl font-bold text-gray-800">
            Zgody i oświadczenia
          </label>
          <div
            className="flex items-center w-full p-2 hover:bg-gray-200 rounded-sm cursor-pointer"
            onSelect={selectAll}
          >
            <input
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
              type="checkbox"
              name="accept-all"
            />
            <label>Zazanczam wszystko</label>
          </div>
          <div className="flex items-center w-full p-2 hover:bg-gray-200 rounded-sm cursor-pointer">
            <input
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
              type="checkbox"
              value={rules}
              name="accept-all"
            />
            <label>Akceptuję regulamin sklepu*</label>
          </div>
          <div className="flex items-center w-full p-2 hover:bg-gray-200 rounded-sm cursor-pointer">
            <input
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
              type="checkbox"
              value={news}
              name="accept-all"
            />
            <label>Chcę być na bieżąco z najnowszymi ofertami</label>
          </div>
        </form>
      </div>
    </div>
  );
}
