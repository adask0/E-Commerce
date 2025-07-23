import React, { useState, useEffect } from "react";
import Img from "../../assets/item.png";

export default function DailyPromotion() {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    let countdownInterval;

    if (countdownStarted) {
      countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
          alert("Promocja zakończona");
          setCountdownStarted(false);
        }

        setTimeRemaining(remainingTime);
      }, 1000);
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [countdownStarted, eventDate]);

  useEffect(() => {
    if (countdownStarted) {
      document.title = eventName || "Okazja Dnia";
    }
  }, [countdownStarted, eventName]);

  const handleSetCountdown = () => {
    const now = new Date();
    const endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    setEventDate(endTime.toISOString());
    setCountdownStarted(true);
    setTimeRemaining(24 * 60 * 60 * 1000);
  };

  const handleStopCountDown = () => {
    setCountdownStarted(false);
    setTimeRemaining(0);
  };

  const handleResetCountdown = () => {
    setCountdownStarted(false);
    setEventDate("");
    setEventName("");
    setTimeRemaining(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return (
      <>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg w-14 h-14 border border-gray-200">
          <p className="font-bold text-lg text-gray-800">
            {hours.toString().padStart(2, "0")}
          </p>
          <p className="text-xs text-gray-500">godz.</p>
        </div>
        <span className="text-2xl font-bold text-gray-600 mx-2">:</span>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg w-14 h-14 border border-gray-200">
          <p className="font-bold text-lg text-gray-800">
            {minutes.toString().padStart(2, "0")}
          </p>
          <p className="text-xs text-gray-500">min.</p>
        </div>
        <span className="text-2xl font-bold text-gray-600 mx-2">:</span>
        <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg w-14 h-14 border border-gray-200">
          <p className="font-bold text-lg text-gray-800">
            {seconds.toString().padStart(2, "0")}
          </p>
          <p className="text-xs text-gray-500">sek.</p>
        </div>
      </>
    );
  };

  return (
    <div className="w-full lg:w-[33%]">
      <h1 className="text-3xl mb-8 font-bold text-center lg:text-left text-gray-800">
        Okazja Dnia
      </h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="flex justify-center mb-4">
          <img className="w-48 h-48 object-contain" src={Img} alt="item" />
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Monitory
          </p>
          <h3 className="font-bold text-xl text-gray-800">
            Samsung Odyssey G7 32"
          </h3>

          <div className="py-4">
            <p className="text-3xl font-bold text-red-600">1 899,00 zł</p>
            <div className="text-xs text-gray-500 mt-2 space-y-1">
              <p>
                Cena bez promocji:{" "}
                <span className="line-through">2 299,00 zł</span>
              </p>
              <p>Najniższa cena z ostatnich 30 dni: 2 099,00 zł</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            {countdownStarted && eventDate
              ? `Do końca promocji zostało:`
              : "Kliknij Start, aby rozpocząć promocję 24h"}
          </p>

          <div className="flex justify-center items-center mb-6">
            {countdownStarted && formatTime(timeRemaining)}
          </div>

          <div className="flex justify-center gap-3">
            <button onClick={handleSetCountdown} disabled={countdownStarted}>
              Start
            </button>
            <button onClick={handleStopCountDown} disabled={!countdownStarted}>
              Stop
            </button>
            <button onClick={handleResetCountdown}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}
