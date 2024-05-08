import { useContext, useState, useEffect } from "react";
import { CartCard, NoRecordFound } from "../../components";
import { ProductContext } from "../../globalState/ProductCntx";
import { Strings } from "../../data/strings";

export const ViewCart = () => {
  const { totalMsg } = Strings;
  const { cart } = useContext(ProductContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, cartIteam) => {
      return acc + parseInt(cartIteam.price);
    }, 0);

    setTotal(totalAmount);
  }, [cart]);

  return (
    <>
      <section className="flex flex-col align-items-center justify-content-center gap3 p-3">
        {cart?.length === 0 ? (
          <NoRecordFound className={`text-center fs-2 text-capitalize`} />
        ) : (
          cart?.map((listCart, index) => {
            console.log(listCart);
            return <CartCard key={index} listCart={listCart} />;
          })
        )}
        <span className="text-capitalize">
          {totalMsg}
          {total}
        </span>
      </section>
    </>
  );
};
