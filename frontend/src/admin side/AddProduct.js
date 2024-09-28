import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState('');
    console.log(image,12)

    const handleChange = (e) => {
      
        setTitle(e.target.value);
    };

    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleCountChange = (e) => {
        setCount(e.target.value);
    };

    // const handleImageChange = (e) => {
    //     setImage(e.target.files[0]);
    // };

    const handleClick = () => {
        console.log(title, desc, price, count,image);
        const formData = new FormData()
        formData.append('title',title)
        formData.append('description',desc)
        formData.append('price',price)
        formData.append('count',count)
        formData.append('image',image)
        axios.post('http://localhost:5000/api/shopping',formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
        }}
        ).then((res)=>{
          console.log(res.data)
        }).catch(err=>{
          console.log(err,"err")
        })

    };

    return (
        <div className='admin-card'>
            <h1>Add Product</h1>
            <form id="addProductForm">
                <div>
                    <label htmlFor="productName">Product Name:</label><br />
                    <input type="text" id="productName" name="productName" value={title} onChange={handleChange} required /><br />
                </div>
                <div>
                    <label htmlFor="productDescription">Product Description:</label><br />
                    <textarea id="productDescription" name="productDescription" value={desc} onChange={handleChangeDesc} required></textarea><br />
                </div>
                <div>
                    <label htmlFor="productPrice">Price:</label><br />
                    <input type="number" id="productPrice" name="productPrice" value={price} onChange={handlePriceChange} required /><br />
                </div>
                <div>
                    <label htmlFor="productCount">Count:</label><br />
                    <input type="number" id="productCount" name="productCount" value={count} onChange={handleCountChange} required /><br />
                </div>
                <div>
                    <label htmlFor="productImage">Product Image:</label><br />
                    <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="productImage" name="productImage" required /><br />
                </div>
                <button type="button" onClick={handleClick}>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
