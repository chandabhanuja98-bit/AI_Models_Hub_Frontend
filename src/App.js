import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import Signup from './signup';
import Login from './login';
import RegressionModels from './regression_models';
import ClassificationModels from './classificationModels';
import HousePricePrediction from './house_price_prediction';
import MobilePricePrediction from './mobilePricePrediction';
import LoanApprovalPrediction from './loan_approval_prediction';
import IrisFlowerPrediction from './irisFlowerPrediction';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regression-models" element={<RegressionModels />} />
        <Route path="/classification-models" element={<ClassificationModels />} />
        <Route path="/house-price-prediction" element={<HousePricePrediction />} />
        <Route path="/mobile-price-prediction" element={<MobilePricePrediction />} />
        <Route path="/loan-approval-prediction" element={<LoanApprovalPrediction />} />
        <Route path="/iris-flower-prediction" element={<IrisFlowerPrediction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;                                     
