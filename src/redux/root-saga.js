import {all, call} from 'redux-saga/effects';
import {fetchCollectionsStart} from './shop/Shop.sagas';
import {userSagas} from './user/user.sagas';
import {cartSagas} from './cart/cart.sagas';
import {shopSagas} from './shop/Shop.sagas';

export default function* rootSagas() {
    yield all ([
        call(fetchCollectionsStart), 
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ]);
}