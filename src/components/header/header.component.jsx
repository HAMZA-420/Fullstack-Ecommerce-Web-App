import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
import {signOutStart} from '../../redux/user/user.actions';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

const Header =({currentUser, hidden, signOutStart}) => (
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
                (<OptionLink as='div'  onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);