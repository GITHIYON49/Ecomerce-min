import './style.scss'
import Image from '../Image/Image';
import { useContext} from "react";
import { productContext } from '../../App';
import {Button} from '../Button/Button';
import React from 'react';
import { strings } from '../../data/strings';



const ProductCard = ({listItems}) => {

  const{add,remove}=strings;
  const {cart,setCart} = useContext(productContext);

  const{productName,price,image} = listItems;

function handleAddCart(){
 setCart([...cart,listItems])
}

function handleRemoveCart(){
  setCart(cart.filter((cr)=> cr.id !== listItems.id))
}
  return <>
  <div className='card-container'>
    <div className='card-container__pic'>
       <Image pic={image} picname={productName}/>
    </div>
    <div className='card-container__detail'>
    <h5 className='card-container__detail__title'>{productName}</h5>
    <p className='card-container__detail__price'>₹{price}</p>
    {
      cart.includes(listItems) ? (
        <Button className='card-container__detail__btn' btnType={remove} onClick={() => handleRemoveCart()} />
      ) : (
        <Button className='card-container__detail__btn' btnType={add} onClick={() => handleAddCart()} />
      )
      
    }

    </div>


  </div>
  </>
}

export default ProductCard;