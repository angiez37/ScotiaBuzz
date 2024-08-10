// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";

const FraudDetector = (): JSX.Element => {
    //const navigate = useNavigate()
    const [showResult, setShowResult] = useState(false);

    return (
        <>
            <NavBar />
            {!showResult && (
                <div className=" flex flex-col relative z-20 text-center items-center overflow-hidden ">
                    <div className="container mx-auto px-6 flex flex-col items-center text-center relative py-12">
                        <h1 className="font-bebas-neue text-2xl font-black flex flex-col leading-none text-gray-800">
                            Scotia Fraud Risk Detector
                        </h1>
                        <p className="mt-4">Upload Content or use Speech To Text</p>
                        <div className="flex flex-row items-center">
                        <button className="bg-[#f28500]  mt-6  hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border  hover:border-[#f28500] rounded">
                            Upload
                        </button>
                        <img src="audio.png" alt="audio" className="w-[30px] h-[30px] mt-5 ml-4"/>

                        </div>
                        
                    </div>
                    <textarea name="postContent" placeholder="Paste content..." rows={10} cols={40} className="w-[700px] border bg-gray-50 rounded-md p-6" />
                    <button onClick={() => setShowResult(true)} className="bg-transparent my-6 hover:bg-[#ff0000] text-black font-semibold hover:text-white py-2 px-4 border border-[#ff0000] hover:border-transparent rounded">
                        Submit
                    </button>
                </div>
            )}

            {showResult && (
                <div className="bg-white flex flex-col relative z-20  items-center overflow-hidden ">
                    <div className="container mx-auto px-6 flex flex-col items-center relative py-12">
                        <h1 className="font-bebas-neue text-2xl uppercase font-black flex flex-col leading-none text-gray-800">
                            Scotia Fraud Risk Detector
                        </h1>
                        <h2 className="font-bebas-neue mt-6 text-2xl uppercase font-black flex flex-col leading-none text-[#ff0000]">
                            98.3% Risk of Fraud
                        </h2>
                        <p className="text-md font-semibold sm:text-base text-black py-4 max-w-md">
                            Explanation
                        </p>
                        <ul className="list-disc py-4">
                            <li className="pb-4">Multiple occurences of "urgent"</li>
                            <li className="pb-4">Unverified email address and domain (scot1abank instead of scotiabank)</li>
                            <li>Requires you to click a link</li>
                        </ul>
                    </div>
                    <button onClick={() => setShowResult(false)} className="bg-transparent my-6 hover:bg-[#ff0000] text-black font-semibold hover:text-white py-2 px-4 border border-[#ff0000] hover:border-transparent rounded">
                        Back To Detector
                    </button>
                </div>
            )}
        </>
    );
};

export default FraudDetector;
