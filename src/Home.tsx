// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";

const Home = (): JSX.Element => {
    //const navigate = useNavigate()
    const [showResult, setShowResult] = useState(false);
    console.log(showResult);
    return (
        <>
            <NavBar />
            {!showResult && (
                <div className="bg-white flex flex-col relative z-20 text-center items-center overflow-hidden ">
                    <div className="container mx-auto px-6 flex flex-col items-center text-center relative py-12">
                        <h1 className="font-bebas-neue text-2xl uppercase font-black flex flex-col leading-none text-gray-800">
                            Scotia Fraud Risk Detector
                        </h1>
                        <button onClick={() => setShowResult(true)} className="bg-transparent mt-6  hover:bg-white bg-[#7586c6] text-white font-semibold hover:text-black py-2 px-4 border  hover:border-[#7586c6] rounded">
                        Upload Content
                        </button>
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
                            96% Risk of Fraud
                        </h2>
                        <p className="text-md font-semibold sm:text-base text-black pt-4 max-w-md">
                            Explanation
                        </p>
                        <ul className="list-disc">
                            <li>Multiple occurences of "urgent"</li>
                            <li>Unverified email address and domain</li>
                            <li>...</li>
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

export default Home;
