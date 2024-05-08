function Image({ pic, picname }) {
  return (
    <>
      <img className="product-img" src={pic} alt={picname} />
    </>
  );
}

export default Image;
