import { useNavigate } from "react-router-dom";

const Home = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <p>test</p>
        </div>
    );
};

export default Home;
