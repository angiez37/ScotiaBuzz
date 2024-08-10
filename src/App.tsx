import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FraudDetector from './FraudDetector';
import Home from './Home';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fraud" element={<FraudDetector />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;