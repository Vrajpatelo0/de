import React from 'react';
import './Components/Interface1';
import Navbar from './Components/Navbar';
import Maintab from './Components/Maintab';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Interface1 from './Components/Interface1';
import Questions from './Components/Questions'
import Profile from './Components/Profile';

function App() {

  const [questions, setQuestions] = React.useState([])

  const handleSubmit = (que) => {
    setQuestions(que)
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Maintab />} />
        <Route path='/generate_questions' element={<Interface1 userQuestions={handleSubmit} />} />
        <Route path='/question_output' element={<Questions userQuestions={questions} />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      {/* <Navbar />
      <Maintab/> */}
    </Router>  
  );
}

export default App;
