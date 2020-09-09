import React from 'react';
import './ProductCheckout.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function ProductCheckout({id, title, image, price, rating}) {

    return <div className="productCheckout">

        <img 
            src={image}
            alt="displaying-product"
        />
        <div className="productCheckout__info">

            <p>{title}</p>

            <p className="productCheckout__price">

                <small>$</small>
                <CurrencyFormat 
                    value={price}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={""}
                    renderText={value =>
                    <strong>{value}</strong>
                    }
                />

            </p>

            <div className="productCheckout__rating">

                {Array(rating).fill().map((_, i) => (
                    // eslint-disable-next-line
                    <p>⭐</p>
                ))}

            </div>

            <button onClick={'removeFromBasket'}>Remove from Basket</button>

        </div>

    </div>
}

export default ProductCheckout;