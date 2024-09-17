import React, { useEffect, useState } from 'react'

const Cart = () => {

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
  useEffect(() => {
    // console.log("hello", arr)
    localStorage.setItem("addtocartdata", JSON.stringify(addtocard))

}, [addtocard])

function deleteItem(del_index) {
    let newarr = addtocard.filter((items, index) => index != del_index);
    setaddtocard(newarr);
    localStorage.setItem("addtocartdata", JSON.stringify(newarr))
}
  // let deleteItem=(delcard)=>{
  //   console.log(delcard)
  //   let newcard= addtocard.filter((items,index)=>{
  //     return index !== delcard
  //   })
  //   console.log(newcard)
  //   localStorage.setItem("addtocartdata",JSON.stringify(newcard))
  // }

  
  // useEffect(()=>{
  //   localStorage.setItem("addtocartdata",JSON.stringify(addtocard))
  // },[addtocard])

  
  return (
    <>
      <div className="row">
        {addtocard.map((items, index) => {
          return (
            <div className='col-lg-4 mt-3 mb-3' key={index}>
              <div class="card">
                <img src={items?.Image} alt="...loding" />
                <div>Product Name: {items?.ProductName} </div>
                {/* <div>Description  : {items?.Description} </div> */}
                <div>Price    : {items?.Price}</div>
                <button onClick={() => deleteItem(index)} type='submit'>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart;
