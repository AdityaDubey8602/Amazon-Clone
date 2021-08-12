import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if(user) {
            auth.signOut(); 
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>
                {/* 1 */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className='header__option'>
                        <span className='header__optionLineOne'>
                            {user ? 'Hello '+ user.email : 'Hello'}
                        </span>    
                        <span className='header__optionLineTwo'>
                           {user ? 'Sign Out' : 'Sign In'}
                        </span>    
                    </div>
                </Link>
                {/* 2 */}
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>    
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>
                {/* 3 */}
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>    
                    <span className='header__optionLineTwo'>
                        Prime 
                    </span>
                </div>
                {/* 4 */}
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className='header__optionLineTwo header_basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
