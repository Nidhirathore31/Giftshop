import React, { useContext, useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ProductContext } from './ProductsContext';
const CartList = () => {

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

    const [imagePreview, setImagePreview] = useState([]);
    console.log("imagePreview",imagePreview)
    // profile value handel
    let products_img_hadnel = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview([...imagePreview, e.target.result]);
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
    }

    useEffect(() => {
        console.log(product_arr)
        localStorage.setItem("productsdata", JSON.stringify(product_arr))
    }, [product_arr]);

    function deleteItem(del_index) {
        let newarr = product_arr.filter((items, index) => index != del_index);
        setproduct_arr(newarr);
        localStorage.setItem("productsdata", JSON.stringify(newarr))
    }


    console.log(product_arr)

    //    const {products, setProducts} = useContext(ProductContext);
    const deleteProduct = (id) => {
        // setProducts(products.filter(product => product.id !== id));
    }
    return (
        <>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Products List</h2>
                    </div>
                    <div className="row">
                        {product_arr.map((items,index) => {
                            return (
                                <div className='col-lg-4 mt-3 mb-3' >
                                <div class="card">
                                    <img src={items?.Image} alt="...loding" />
                                    <div>Product Name: {items?.Product} </div>
                                    <div>Description  : {items?.Description} </div>
                                    <div>Price    : {items?.Price}</div>
                                    <button onClick={() => deleteItem(index)} type='submit'>Delete</button>
                                    {/* <button type='submit' onClick={() => editItem(index)}>Edit</button> */}
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className="btn-box">
                        <a href="">View All Products</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartList
