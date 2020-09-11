import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { getUsername } from '../reducer';

function Header() {

    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    alt="header-logo"
                    src="https://previews.dropbox.com/p/thumb/AA5Wy9cVPEOLc5y3Fo0KNQ6KqCFkHhUrNELc6wPZ8uP6NpYl-27sUTkgu0X0ouVInxDI3twhiAe2OJPbMoOtRo8o0Lte7YUn3HFduOCiCrz_DPZE4ysMuBoaiWDO3K15U4py9DWzyIddmDp1xBXhC-P9AB4_kiSa-sJ3gAYvQuf4h76IPft5srNspuIlLpDJTyzCRTFWsZLcXH0QXZAhhiMgH0Xx7RgJigdibdLVOPbo8bdaHscVuAYzMwRSi-tIepTu1OpLi5Q754uMGWbv6ohpEvNXk-gPMS-uvoDyqMksvlWIP1p8bMCbNONtLkXuDk3DUvJC7pm-5xy0b4Dnss3JO3Bjw2WlrkLNK3VEDdwU-A/p.png?size=1600x1200&size_mode=3"
                />
            </Link>

            <div className="header__search">

                <input 
                    className="header__searchInput"
                    type="text"
                />

                <SearchIcon className="header__searchIcon" />

            </div>

            <div className="header__nav">

                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">

                        <span className="header__optionLineOne">
                            {user ? `Hello, ${getUsername(user.email)}` : 'Hello, Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>

                    </div>
                </Link>

                <div className="header__option">

                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>

                </div>

                <div className="header__option">

                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
    
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>

        </div>

    )

}

export default Header;