import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    
    const {user,logOut} = useContext(AuthContext);
    const handleSignOut = () =>
    {
        logOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return (
      
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                
                
                <span className='text-rose-50 mx-3'> {user?.email}</span>

                {
                    user?.uid ? <button onClick={handleSignOut} className="btn btn-warning mx-3">Sign Out</button>:
                
                   <> 
                   <Link to="/login" className="btn mx-3">Login</Link> 
                   <Link to="/signup" className="btn mx-3">SignUp</Link>
                   </> 
                }
                
                
                
                {/* //Kono obj er props dekhate gele ternary operator user korte hoy.ekhane user obj er vitor email ashe kina ta bujhano hyse */}
            </div>
        </nav>
    );
};

export default Header;