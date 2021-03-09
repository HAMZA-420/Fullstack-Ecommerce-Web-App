import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.styles';

const CollectionItem =({item, addItem}) =>{ 
    const{name, price, imageUrl} = item;
    return(
    <CollectionItemContainer>
        <BackgroundImage
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
        <CollectionFooterContainer>
            <PriceContainer>{name}</PriceContainer>
            <NameContainer>{price}</NameContainer>
        </CollectionFooterContainer>
        <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
        </CollectionItemContainer>
    
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);