import React, { useState } from 'react';

const ProductForm = () => {
  // State to manage form data
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update form data based on input changes
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Display form data in an alert and log to console
    alert(JSON.stringify(productData, null, 2));
    console.log('Form Data:', productData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields with labels */}
      <label>
        Product Name:
        <input type="text" name="productName" value={productData.productName} onChange={handleInputChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={productData.description} onChange={handleInputChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={productData.category} onChange={handleInputChange} />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={productData.quantity} onChange={handleInputChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={productData.price} onChange={handleInputChange} />
      </label>
      {/* Submit and Cancel buttons */}
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => setProductData({})}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
