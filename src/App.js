import React from 'react';
import './Components/Interface1';
import Navbar from './Components/Navbar';
import Maintab from './Components/Maintab';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Interface1 from './Components/Interface1';
import Questions from './Components/Questions'
import Profile from './Components/Profile';
import Register from './Components/Register'
import LandingPage from './Components/Register/src/components/pages/LandingPage';
import RegisterPage from './Components/Register/src/components/pages/RegisterPage';
import LoginPage from './Components/Register/src/components/pages/LoginPage';
import ForgetPasswordPage from './Components/Register/src/components/pages/ForgetPasswordPage';
import HomePage from './Components/Register/src/components/pages/HomePage';

function App() {

  const [questions, setQuestions] = React.useState([])

  const handleSubmit = (que) => {
    setQuestions(que)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Maintab />} /> */}
        <Route path='/generate_questions' element={<Interface1 userQuestions={handleSubmit} />} />
        <Route path='/question_output' element={<Questions userQuestions={questions} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>  
  );
}

export default App;
