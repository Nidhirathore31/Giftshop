import React, { useContext, useEffect, useState } from 'react'
const ProductList = () => {
    let [product_arr, setproduct_arr] = useState(
        () => {
            let local_productsdata = localStorage.getItem("productsdata")
            if (local_productsdata != null) {
                return JSON.parse(local_productsdata)
            } else {
                return []
            }
        }
    )
    let [image, setimage] = useState();
    let [productname, setproductname] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState("");
    let [coupon, setCoupon] = useState("");
    const [imagePreview, setImagePreview] = useState();
    // profile value handel
    let products_img_hadnel = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const productHandler = (e) => {
        e.preventDefault();
        console.log(imagePreview, "imagePreview")
        let newProduct = {
            Image: imagePreview,
            Product: productname,
            Description: description,
            Price:  price,
            Coupon: coupon,
        };
        setproduct_arr([...product_arr, newProduct]);
        console.log(product_arr, "product")
        localStorage.setItem("productsdata", JSON.stringify(product_arr))
        setImagePreview(null)
    }
    useEffect(() => {
        console.log(product_arr)
        localStorage.setItem("productsdata", JSON.stringify(product_arr))
    }, [product_arr]);
    
    return (
        <div>
            <div className='container-fluid logcontainer'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='bgimage'> <br /><form action="">
                        <h1 className='heading1'>Add Product of your choice</h1>
                        <br />
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Product Image</label>
                                <input type="file"
                                    className='form-control inpt'
                                    placeholder='Enter Product name'
                                    onChange={products_img_hadnel}
                                    required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Product Name</label>
                                <input type="text"
                                    className='form-control inpt'
                                    placeholder='Enter product'
                                    value={productname}
                                    onChange={(e) => setproductname(e.target.value)}
                                    required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Description</label>
                                <input type="text"
                                    className='form-control inpt'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>price</label>
                                <input type="number"
                                    className='form-control inpt'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="" className='row'>Coupon code</label>
                                <input type='number'
                                    className='form-control inpt'
                                    placeholder='Apply coupon code'
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                />
                            </div>
                            <div className='col-md-3'>
                            </div>
                        </div>
                        <div className="">
                            <div className='text-center'>
                                <button type='Submit' className='btn btn-success' onClick={productHandler}  >Add Product </button> <br />
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            {/* <div className='row'>
                {product_arr?.map((items, index) => {
                    return (
                        <div key={index} className='col-lg-4 mt-3 mb-3'>
                            <div class="card">
                                <img src={items?.Image} alt="...loding" />
                                <div>Product Name: {items?.Product} </div>
                                <div>Description  : {items?.Description} </div>
                                <div>Price    : {items?.Price}</div>
                                <button onClick={() => deleteItem(index)} type='submit'>Delete</button>
                                <button type='submit' onClick={() => editItem(index)}>Edit</button>
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>

    )
}

export default ProductList;
