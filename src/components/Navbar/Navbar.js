import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import './style.scss';
import { strings } from '../../data/strings';

 const Navbar = () => {
const{home,cartItem}=strings;
  const[show,setShow]=useState(true);
function handleShow(){
  setShow(!show);

}

  return <>
  <div className='w-100 bg-body-tertiary p-4'>
    <div className='container d-block d-sm-flex align-items-center justify-content-between position-relative'>
   <div className='d-flex align-items-center justify-content-between'>
    <h2 className='col-5 col-xl-2 col-lg-4 text-uppercase' >shopify</h2>
    <Menu className='d-sm-none' onClick={handleShow}/>
    </div>

    <ul className={`${show ? 'd-none align-items-center justify-content-evenly col-8 col-xl-4 col-lg-5 text-capitalize fs-5 fw-bold d-sm-flex': 'items-show'}`}>
        <li className={`${show ? '': 'items-show__list'}`}>
            <Link className='text-dark ' to='/'>
            {home}
            </Link>
            
        </li>
        <li className='items-show__list'>
        <Link className='text-dark ' to='/cart'>
            {cartItem}<span className=' bg-secondary  p-2 m-2 rounded-circle text-center text-light fs-6'>1</span>
            </Link>
        </li>
    </ul>
    </div>
  </div>
  </>
}


export default Navbar;
