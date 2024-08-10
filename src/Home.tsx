// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import ChartLine from "./Chart";

const Home = (): JSX.Element => {
    //const navigate = useNavigate()
    const [showResult, setShowResult] = useState(false);

    const cards = [
        { id: 1, text: 'Phishing', href: '/' },
        { id: 2, text: 'Message', href: '/fraud' },
        { id: 3, text: 'Romance Scam', href: '/fraud' },
        { id: 4, text: 'Credit Card', href: '/fraud' },
        { id: 5, text: 'Data Breach', href: '/fraud' },
        { id: 6, text: 'Identity', href: '/fraud' },
        { id: 7, text: 'Online Shopping', href: '/fraud' },
        { id: 8, text: 'Business', href: '/fraud' },
        { id: 9, text: 'Call', href: '/fraud' },

    ];

    return (
        <>
            <NavBar />
            <div className="flex justify-center py-6"><h1 className="text-3xl font-black flex flex-col leading-none text-gray-800">
                Scotiabank & Tangerine Fraud Hub
            </h1></div>

            {!showResult && (
                <>
                    <p className="text-lg text-center  flex flex-col leading-none ">
                        Please select the type of fraud to see recent activities.
                    </p>
                    <div className="flex flex-wrap justify-center px-20">
                        {cards.map(card => (
                            <div className="p-4 max-w-sm">
                                <button onClick={() => setShowResult(true)} className="bg-[#f28500] w-[270px] h-[270px] mt-6  hover:bg-[#f5aa4d] text-white font-semibold  py-2 px-4 border rounded">
                                    <span className="text-3xl">{card.text}</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {showResult && (
                <div className="px-20 flex flex-col align-center items-center justify-center">
                    <div className=" flex relative z-20 text-center items-center overflow-hidden ">
                        <div className="container mx-auto px-6 flex items-center text-center relative pb-12">
                            <h1 className="text-2xl font-black flex flex-col leading-none text-gray-800">
                                Phishing Reports in Toronto
                            </h1>
                        </div>
                    </div>
                    <div className="w-[800px] pb-20">
                        <ChartLine />
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
