import { Route, Switch,Redirect } from 'react-router-dom';
import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './components/pages/checkout/checkout.component';
import {checkUserSession} from './redux/user/user.actions';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props
    checkUserSession();
   }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signIn' render={()=>
          this.props.currentUser ? (
          <Redirect to='/' />
          ): (
          <SignInAndSignUp/>
          )
        }
        />
      </Switch>
    </div>
    )
};
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
  
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);