import React, { Component } from 'react'
import SHOP_DATA from './Shop.data';
import CollectionPreview from '../../Components/CollectionPreview/Collection.preview.component';


class Shop extends Component {
    state = {
     collections : SHOP_DATA
    }

    render() {

        const  {collections} = this.state

        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Shop;