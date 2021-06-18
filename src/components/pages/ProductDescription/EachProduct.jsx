import React from 'react';
import './EachProduct.css';
import { IoBagAdd } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/shopping/shopping-actions';

function EachProduct() {
  const {
    id, image, title, price, description,
  } = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  return (
    <div className="eachProduct-main">
      <div className="eachProduct">
        <img src={image} alt="" className="eachProduct-img" />

        <div className="eachProduct-detail">
          <h3>{title}</h3>
          <p>
            {description}
          </p>

          <div className="eachProduct-buttons">
            <p>
              Price
              {price}
            </p>
            <button className="btn btn-dark" type="button" onClick={() => { dispatch(addToCart(id)); }}>
              {' '}
              <IoBagAdd size="25" />
              {' '}
              <span>Add to Cart</span>

            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EachProduct;
