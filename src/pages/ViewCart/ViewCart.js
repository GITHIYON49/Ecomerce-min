import { CartCard } from "../../components";
import { productContext } from "../../App";
import { useContext,useState,useEffect } from "react";
import { strings } from "../../data/strings";

export const ViewCart = () => {
  const{notFound,totalMsg}=strings;
  const{cart} = useContext(productContext);

  const[total,setTotal]=useState(0)

  useEffect(()=>{
    const totalAmount =  cart.reduce((acc,cartIteam)=>{
      return acc + parseInt (cartIteam.price)
  
     },0)
  
     setTotal(totalAmount);
  

  },[cart])



  return <>
  <section className="flex flex-col align-items-center justify-content-center gap3 p-3">
    {
      cart.length === 0 ? <div className="text-center fs-2 text-capitalize">{notFound}</div> :
      cart?.map((listCart,index)=>{
        console.log(listCart);
        return <CartCard key={index} listCart={listCart} />
      })
    }
    <span className="text-capitalize">{totalMsg}{total}</span>
    
  </section>
  </>
}
