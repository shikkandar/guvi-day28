import React, { useContext, useState } from 'react';
import { CourseContext } from './CourseContext';

const Body = () => {
  const { products } = useContext(CourseContext);

const remove=(e)=>{
  console.log(e);
}

  const generateOption = () => {
    const option = [];
    for (let i = 0; i < 10; i++) {
      option.push(<option key={i + 1} value={i + 1}>{i + 1}</option>);
    }
    return option;
  };

  // Initialize an array to store quantities for each product
  const [quantities, setQuantities] = useState(Array(products.length).fill(1));
  const multi = (e, index) => {
    const selectedVal = e.target.value;

    // Update the quantity for the specific product
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = parseInt(selectedVal, 10);
      return newQuantities;
    });
  };

  return (
    <div className='container d-flex flex-column gap-5 my-5'>
      {products.map((data, i) => (
        <div key={i} className='main'>
          <div key={i} className='d-flex justify-content-between '>
            <div className='img-des d-flex align-items-center  gap-5'>
              <div className='image'>
                <img src={data.thumbnail} alt="" />
              </div>
              <div className='image-des'>
                <h4>{data.title}</h4>
                <h6>{data.brand}</h6>
                <p>{data.description}</p>
                <h6>{data.category}</h6>
              </div>
            </div>
            <div className='price-des d-flex flex-column justify-content-between'>
              <div className='price-count d-flex'>
                <select onChange={(e) => multi(e, i)} name="" id="" className='mx-5'>
                  {generateOption()}
                </select>
                <div className="price">
                  <strong>${data.price}</strong>
                </div>
              </div>
              <div className="remove-btn align-self-end">
                <button className='btn btn-warning' onClick={remove} >Remove</button>
              </div>
            </div>
          </div>
          <hr />
          <div className="subtotal">
            <div className="sub-price d-flex justify-content-between mt-2">
              <h5>SUBTOTAL:</h5>
              <h5>${data.price * quantities[i]}</h5>
            </div>
            <div className="sub-shopping d-flex justify-content-between mt-2">
              <h5>SHIPPING:</h5>
              <h5>FREE</h5>
            </div>
          </div>
          <hr />
          <div className="sub-price d-flex justify-content-between mt-2">
            <h5>TOTAL:</h5>
            <h5>${data.price * quantities[i]}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
