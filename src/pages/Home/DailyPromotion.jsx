import React, { useState, useEffect } from 'react';
import Img from '../../assets/item.png'

export default function DailyPromotion() {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
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
            document.title = eventName || 'Okazja Dnia';
        }
    }, [countdownStarted, eventName]);

    const handleSetCountdown = () => {
        // Ustawienie daty na 24 godziny od teraz
        const now = new Date();
        const endTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 godziny w milisekundach

        setEventDate(endTime.toISOString());
        setCountdownStarted(true);
        setTimeRemaining(24 * 60 * 60 * 1000); // 24 godziny w milisekundach
    };

    const handleStopCountDown = () => {
        setCountdownStarted(false);
        setTimeRemaining(0);
    };

    const handleResetCountdown = () => {
        setCountdownStarted(false);
        setEventDate('');
        setEventName('');
        setTimeRemaining(0);
    };

    const formatTime = (time) => {
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

        return (
            <>
                <div className='flex border-1 justify-center flex-col w-[50px] h-[50px] m-auto'>
                    <p className='m-auto font-bold'>{hours.toString().padStart(2, '0')}</p>
                    <p className='m-auto text-[10px]'>godz.</p>
                </div>
                <p className='m-auto ml-[1rem] mr-[1rem] font-bold text-2xl'>:</p>
                <div className='flex border-1 justify-center flex-col w-[50px] h-[50px] m-auto'>
                    <p className='m-auto font-bold'>{minutes.toString().padStart(2, '0')}</p>
                    <p className='m-auto text-[10px]'>min.</p>
                </div>
                <p className='m-auto ml-[1rem] mr-[1rem] font-bold text-2xl'>:</p>
                <div className='flex border-1 justify-center flex-col w-[50px] h-[50px] m-auto'>
                    <p className='m-auto font-bold'>{seconds.toString().padStart(2, '0')}</p>
                    <p className='m-auto text-[10px]'>sek.</p>
                </div>
            </>
        )
    }

    return(
        <div className='w-full lg:w-[33%]'>
            <h1 className='text-3xl mb-[2rem] font-bold text-center lg:text-left'>Okazja Dnia</h1>
            <div className='flex border-2 justify-center flex-col rounded-2xl h-full hover:cursor-pointer hover:scale-105 duration-75'>
                <img className='w-[300px] m-auto' src={Img} alt="item" />
                <p className='m-auto'>Item Category</p>
                <p className='m-auto font-bold text-[2rem]'>Item Name</p>
                <p className='m-auto text-2xl text-[#C00000] font-bold pt-[1rem] pb-[1rem]'>500zł</p>
                <p className='m-auto text-center text-[12px]'>Cena bez promocji: 600zł<br />Najniższa cena z ostatnich 30 dni: 100zł</p>
                <div className='w-[90%] border-[1px] m-auto mb-[1rem] mt-[1rem]'></div>
                <p className='m-auto'>
                    {countdownStarted && eventDate
                        ? `Do końca promocji zostało:`
                        : 'Kliknij Start, aby rozpocząć promocję 24h'
                    }
                </p>
                <div className='m-auto mt-[1rem] mb-[1rem] flex flex-row'>
                    {countdownStarted && formatTime(timeRemaining)}
                </div>
                <div className='flex gap-2 mt-2'>
                    <button
                        className='font-bold cursor-pointer'
                        onClick={handleSetCountdown}
                        disabled={countdownStarted}
                    >
                        Start
                    </button>
                    <button
                        className='font-bold cursor-pointer'
                        onClick={handleStopCountDown}
                        disabled={!countdownStarted}
                    >
                        Stop
                    </button>
                    <button
                        className='font-bold cursor-pointer'
                        onClick={handleResetCountdown}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
