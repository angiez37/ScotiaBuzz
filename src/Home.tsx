// import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Home = (): JSX.Element => {
    //const navigate = useNavigate()

    return (
        <>
            <NavBar />
            <div className="bg-white flex flex-col relative z-20 text-center items-center overflow-hidden ">
                <div className="container mx-auto px-6 flex flex-col items-center text-center relative py-12">
                    <h1 className="font-bebas-neue text-2xl uppercase font-black flex flex-col leading-none text-gray-800">
                        Scotia Fraud Risk Detector
                    </h1>
                    <p className="text-sm sm:text-base text-black pt-10 max-w-md">
                        Upload Content
                    </p>
                    
                </div>

                <textarea name="postContent" rows={10} cols={40} className="w-[700px] border bg-gray-50 rounded-md" />
                <button onClick={() => alert("clicked")} className="bg-transparent my-6 hover:bg-[#ff0000] text-black font-semibold hover:text-white py-2 px-4 border border-[#ff0000] hover:border-transparent rounded">
                        Submit
                    </button>
            </div>




        </>
    );
};

export default Home;
