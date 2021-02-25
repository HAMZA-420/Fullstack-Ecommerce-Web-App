import { Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const{setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              }); 
          console.log(this.state);
        });
      }
     
      setCurrentUser(userAuth);
    });
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
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInAndSignUp} />
      </Switch>
    </div>
    )
};
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
