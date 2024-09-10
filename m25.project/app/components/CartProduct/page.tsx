import React from 'react'
import "./cart.scss"
export default function page() {
  return (
    <>
        <div className="wrap cf">
  <h1 className="projTitle">
    Responsive Table<span>GIFTOS</span> Shopping Cart
  </h1>
  <div className="heading cf">
    <h1>My Cart</h1>
    <a href="#" className="continue">
      Continue Shopping
    </a>
  </div>
  <div className="cart">
       <ul className="tableHead">
<li className="prodHeader">Product</li>
<li>Quantity</li>
<li>Total</li>
 <li>Remove</li>
    </ul>
    <ul className="cartWrap">
      <li className="items odd">
        <div className="infoWrap">
          <div className="cartSection">
            <img
              src="https://i.pinimg.com/564x/f5/ba/8f/f5ba8f283bf569aa889bd4add026aa96.jpg"
              alt=""
              className="itemImg"
            />
            <p className="itemNumber">#QUE-007544-002</p>
            <h3>Stuffed Animal Ever</h3>
            <p>
              {" "}
              <input type="text" className="qty"  /> 245.000đ
            </p>
            <p className="stockStatus"> In Stock</p>
          </div>
          <div className="prodTotal cartSection">
            <p>245.000đ</p>
          </div>
          <div className="cartSection removeWrap">
            <a href="#" className="remove">
              x
            </a>
          </div>
        </div>
      </li>
      <li className="items even">
        <div className="infoWrap">
          <div className="cartSection">
            <img
              src="https://i.pinimg.com/564x/23/fd/00/23fd009ed38ffecfa8cf127288774a1f.jpg"
              alt=""
              className="itemImg"
            />
            <p className="itemNumber">#QUE-007544-002</p>
            <h3>Babyshower cadeau pakket</h3>
            <p>
              {" "}
              <input type="text" className="qty"  /> 345.000đ
            </p>
            <p className="stockStatus"> In Stock</p>
          </div>
          <div className="prodTotal cartSection">
            <p>345.000đ</p>
          </div>
          <div className="cartSection removeWrap">
            <a href="#" className="remove">
              x
            </a>
          </div>
        </div>
      </li>
      <li className="items odd">
        <div className="infoWrap">
          <div className="cartSection">
            <img
              src="https://i.pinimg.com/564x/f4/48/c8/f448c85516780f0a1e2c012ab3136dcd.jpg"
              alt=""
              className="itemImg"
            />
            <p className="itemNumber">#QUE-007544-002</p>
            <h3>Creative Gift Basket</h3>
            <p>
              {" "}
              <input type="text" className="qty" />323.000đ
            </p>
            <p className="stockStatus out"> Out of Stock</p>
          </div>
          <div className="prodTotal cartSection">
            <p>323.000đ</p>
          </div>
          <div className="cartSection removeWrap">
            <a href="#" className="remove">
              x
            </a>
          </div>
        </div>
      </li>
      <li className="items even">

        <div className="special">
          <div className="specialContent">
            Free gift with purchase!, gift wrap, etc!!
          </div>
        </div>
      </li>
      {/*<li class="items even">Item 2</li>*/}
    </ul>
  </div>
  <div className="promoCode">
    <label htmlFor="promo">Have A Promo Code?</label>
    <input type="text" name="promo"  />
    <a href="#" className="btn" />
  </div>
  <div className="subtotal cf">
    <ul>
      <li className="totalRow">
        <span className="label">Subtotal</span>
        <span className="value">$35.00</span>
      </li>
      <li className="totalRow">
        <span className="label">Shipping</span>
        <span className="value">$5.00</span>
      </li>
      <li className="totalRow">
        <span className="label">Tax</span>
        <span className="value">$4.00</span>
      </li>
      <li className="totalRow final">
        <span className="label">Total</span>
        <span className="value">$44.00</span>
      </li>
      <li className="totalRow">
        <a href="#" className="btn continue">
          Checkout
        </a>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}
