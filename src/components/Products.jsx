import React, { useEffect, useState } from 'react'
const Products = () => {
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

let [addtocard, setaddtocard] = useState(
  () => {
      let local_productsdata = localStorage.getItem("addtocartdata")
      if (local_productsdata != null) {
          return JSON.parse(local_productsdata)
      } else {
          return []
      }
  }
)


let cartHandler=(obj)=>{
  console.log(obj)
  setaddtocard([...addtocard,obj]);
  localStorage.setItem("addtocartdata",JSON.stringify(addtocard))
};
useEffect(() =>{
  localStorage.setItem("addtocartdata",JSON.stringify(addtocard))
},[product_arr,addtocard]
)
  return (
  <>
   <section className="shop_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Latest Products</h2>
      </div>
      <div className="row">
      {product_arr.map((items,index)=>{
          return(
            <div className="col-sm-6 col-md-4 col-lg-3" key={items}>
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={items?.Image} alt="loding..." />
                </div>
                <div className="detail-box">
                  <h6>{items?.Product}</h6>
                  <h6>
                    Price
                    <span>${items?.Price}</span>
                    <br />
                    <button className='mt-2 cartbtn 'onClick={()=> cartHandler(items)}>Add to cart</button>
                  </h6>
                </div>
                <div className="new">
                  <span>New</span>
                </div>
              </div>
            </div>
          </div>
          )
      })}
        {/* <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p1.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Ring</h6>
                <h6>
                  Price
                  <span>$200</span>
                  <br />
                  <button className='mt-2 cartbtn'>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p2.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Watch</h6>
                <h6>
                  Price
                  <span>$300</span><br />
                  <button className='mt-2 cartbtn'>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p3.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Teddy Bear</h6>
                <h6>
                  Price
                  <span>$110</span><br />kk 
                  <button className='mt-2 cartbtn'  onClick={cartHandler}>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p4.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Flower Bouquet</h6>
                <h6>
                  Price
                  <span>$45</span><br />
                  <button className='mt-2 cartbtn'  onClick={cartHandler}>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p5.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Teddy Bear</h6>
                <h6>
                  Price
                  <span>$95</span><br />
                  <button className='mt-2 cartbtn'  onClick={cartHandler}>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p6.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Flower Bouquet</h6>
                <h6>
                  Price
                  <span>$70</span><br />
                  <button className='mt-2 cartbtn'  onClick={cartHandler}>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p7.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Watch</h6>
                <h6>
                  Price
                  <span>$400</span><br />
                  <button className='mt-2 cartbtn'  onClick={cartHandler}>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <div className="box">
            <a href="">
              <div className="img-box">
                <img src="images/p8.png" alt="" />
              </div>
              <div className="detail-box">
                <h6>Ring</h6>
                <h6>
                  Price
                  <span>$450</span><br />
                  <button className='mt-2 cartbtn'  onClick={cartHandler}>Add to cart</button>
                </h6>
              </div>
              <div className="new">
                <span>New</span>
              </div>
            </a>
          </div>
        </div> */}
      </div>
      <div className="btn-box">
        <a href="">View All Products</a>
      </div>
    </div>
  </section>
  </>
  )
}

export default Products
