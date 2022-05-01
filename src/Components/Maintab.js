import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/Maintab.css';
import Interface1 from './Interface1';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'

function Maintab() {
  return(
  <>
     <div id='Maintab'>
        <div className='Container'>
           <h2 className='heading'>Welcome, User</h2>
           <p className='content bold-font'>It's not about how bad you want it, it's about how hard you are willing to work for it.</p>
           <small className='content bold-font'>Tap on Create button to start creating question paper</small>
           <button className='startbtns content'><Link to='/generate_questions' style={{textDecoration: 'none', color: 'white'}}>Create</Link></button>
        </div>
     </div>
  </>)
}

export default Maintab;
