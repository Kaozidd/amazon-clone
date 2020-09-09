import React from 'react';
import './Checkout.css'
import Subtotal from '../components/Subtotal';
import ProductCheckout from '../components/ProductCheckout';
import { useStateValue } from '../StateProvider';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    var products = basket.map(function(item){
        return <ProductCheckout 
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
        />
      })
    return <div className="checkout">
        <div className="checkout__left">
            <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
                alt="advertising"
            />
            <div>
                <h2 className="checkout__title">Your shopping basket</h2>
                <div>
                    {products}
                </div>
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
}

export default Checkout;