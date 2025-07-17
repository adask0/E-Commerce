import React, { useState, useEffect } from "react";
import desktopDeskImg from "../../assets/desktop.png";
import desktopMoImg from "../../assets/desktop_mo.png";
import gpuDeskImg from "../../assets/gpu.png";
import gpuMoImg from "../../assets/gpu_mo.png";

const Advertisement = () => {
    const desktopImages = [
        { img: desktopDeskImg, alt: "desktop" },
        { img: gpuDeskImg, alt: "gpu" },
    ];

    const mobileImages = [
        { img: desktopMoImg, alt: "desktop" },
        { img: gpuMoImg, alt: "gpu" },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % desktopImages.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [desktopImages.length]);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % desktopImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
    };

    const goToImage = (index) => {
        setCurrentImage(index);
    };

    const buttons = (
        <>
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all hover:cursor-pointer"
            >
                ←
            </button>

            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all hover:cursor-pointer"
            >
                →
            </button>
        </>
    );

    return (
        <div className="flex mr-auto ml-auto relative xl:w-[95vw] lg:w-full bg-gray-200 overflow-hidden justify-center border-2 border-amber-900 rounded-2xl" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className="hidden md:block relative w-full h-full">
                <div
                    className="flex transition-transform duration-1000 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {desktopImages.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={image.img}
                                alt={image.alt}
                                className="w-full h-full object-contain hover:cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex md:hidden relative w-screen justify-center mr-auto ml-auto">
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {mobileImages.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={image.img}
                                alt={image.alt}
                                className="w-full h-full object-contain hover:cursor-pointer"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop - tylko na hover */}
            <div className="hidden md:block">
                {isHover && buttons}
            </div>

            {/* Mobile - zawsze widoczne */}
            <div className="block md:hidden">
                {buttons}
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {desktopImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            currentImage === index
                                ? 'bg-white'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Advertisement;
