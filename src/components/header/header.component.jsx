import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

const Header =({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink  to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink  to='/CONTACT' >
                CONTACT
                </OptionLink>
            {
                currentUser ?
                (<OptionLink as='div'  onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>)
                :
               ( <OptionLink className='option' to="/signIn">
                    SIGN IN
                </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropDown />}
    </HeaderContainer>
);

export default connect(mapStateToProps)(Header);