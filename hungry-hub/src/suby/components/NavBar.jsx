import React from 'react';
import { Link } from 'react-router-dom';

const NavBar=()=>{
    return (
       <section className="navBarSection">
        <div className="companyTitle">
            <Link to='/' className='Link'>
            <h2>Hungry hub</h2>
            </Link>
            
        </div>
        <div className="serachBar">
            <input type="text" placeholder='search..'></input>
        </div>
        <div className="userAuth">
            Login/sign up
        </div>
       </section>
    ) 
    
}
export default NavBar;