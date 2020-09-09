import React from 'react';
import './Product.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return <div className="product">

        <div className="product__info">

            <p>{title}</p>

            <p className="product__price">

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

            <div className="product__rating">

                {Array(rating).fill().map((_, i) => (
                    // eslint-disable-next-line
                    <p>⭐</p>
                ))}

            </div>

        </div>

        <img 
            src={image}
            alt="displaying-product"
        />

        <button onClick={addToBasket}>Add to Basket</button>

    </div>
}

export default Product;