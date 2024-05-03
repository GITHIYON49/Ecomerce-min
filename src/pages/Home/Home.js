import { ProductCard } from '../../components';
import { productContext } from '../../App';
import { useContext } from 'react';

export const Home = () => {
  const{product} = useContext(productContext);
  return <>
   <section className="d-flex flex-wrap gap-5 align-items-center justify-content-center mt-3">
    {
      product.map((listItems,i)=>{
       return <ProductCard key={i} title={listItems.productName} listItems={listItems} price={listItems.price} pic={listItems.image}/>

      })
    }
  </section>
  </>
}
