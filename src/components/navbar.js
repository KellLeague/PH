import React from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { Component } from 'react'
import navbar from '../components/navbar.css'


class Navbar extends Component {

    render(){
        return(
            <HashRouter>
                <>
          <div className='headercontainer' >
          <div className='home' >
            <Link className='nav-link' to='/' >Shop</Link>  
          </div>
          <div className='movies' >
          <Link className='nav-link' to='/aboutUs' >About Us</Link>
          <Link className='nav-link' to='/contactUs' >Contact Us</Link>
          </div>

          
          
          </div>
                </>
            </HashRouter>
        )
    }
}
export default Navbar;