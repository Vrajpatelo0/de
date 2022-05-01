import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './styles/Navbar.css'
import {Link} from 'react-router-dom'
import Profile from './Profile';

function Navbar() {
  return (
    <>
        <div className="navigation-bar">
          <h3 className="heading bold-font" href="#">RQPG </h3>
          <div className='routes'>
            <Link className='content links' style={{textDecoration: 'none'}} to='/'>Home</Link>
            <Link className='content links' style={{textDecoration: 'none'}} to='/generate_questions'>Question generation</Link>
            <Link className='content links' style={{textDecoration: 'none'}} to='/question_output'>Question ouput</Link>
            <Link className='content links' style={{textDecoration: 'none'}} to='/profile'>Profile</Link>
          </div>
        </div>
    </>);
}

export default Navbar;
