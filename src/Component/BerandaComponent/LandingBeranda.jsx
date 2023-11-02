import { useState } from "react";
import bgLandingBeranda from "../../assets/images/bg-LandingBeranda.jpg";

const LandingBeranda = () => {
    const [status, setStatus] = useState(false);
    return (
        <>
            <div
                className="flex text-center lg:text-left items-center w-full h-screen font-dmsans bg-cover bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${bgLandingBeranda})`,
                }}
            >
                <div
                    className={`${
                        !status ? "opacity-0" : "bg-black opacity-50"
                    } duration-500 transition-all w-full h-full z-0 absolute`}
                ></div>
                <div className="w-full mx-auto lg:mx-0 lg:w-6/12 h-auto container px-[4vw] lg:px-[4vw] z-10 text-white">
                    <div
                        className={`${
                            !status
                                ? "translate-y-12 opacity-100"
                                : "-translate-y-8 opacity-100"
                        } duration-300 font-bold text-4xl md:text-6xl lg:leading-[80px] `}
                    >
                        Selamat Datang di <br /> TK Al Muhajirin
                    </div>
                    <div
                        className={`${
                            !status
                                ? "translate-y-0 opacity-0"
                                : "-translate-y-7 opacity-100"
                        } duration-300 transition-all text-lg lg:pr-[10vw]`}
                    >
                        Tempat Terbaik untuk Membentuk Generasi Penerus yang Cinta Al Quran dan As Sunnah
                    </div>
                    <button
                        className="bg-red-600 px-4 py-1 rounded-full hover:bg-red-700 duration-300"
                        onClick={() => {
                            setStatus(!status);
                        }}
                    >
                        {!status ? "More" : "Less"}
                    </button>
                </div>
            </div>
        </>
    );
};

export default LandingBeranda;
