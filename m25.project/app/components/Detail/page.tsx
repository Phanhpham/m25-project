import React, { useEffect, useState } from "react";
import "./detail.css";
import { useRouter } from "next/router";
export default function page() {
  return (
    <>
      <>
        <div className="pagination">
          <p>Home &gt; Shop &gt; Gấu bông &gt; </p>
        </div>

        {/* product section */}
        <section className="product-container">
          {/* left side */}
          <div className="img-card">
            <img
              src="https://i.pinimg.com/564x/f5/ba/8f/f5ba8f283bf569aa889bd4add026aa96.jpg"
              alt=""
              id="featured-image"
            />
          </div>
          {/* Right side */}
          <div className="product-info">
            <h3>STUFFED ANIMAL EVER</h3>
            <h5>
              Price: 245.000đ <del>300.000đ</del>
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              accusantium, aspernatur provident beatae corporis veniam atque
              facilis, consequuntur assumenda, vitae dignissimos iste
              exercitationem dolor eveniet alias eos ullam nesciunt voluptatum.
            </p>
            <div className="sizes">
              <p>Size:</p>
              <select name="Size" id="size" className="size-option">
                <option value="xxl">XXL</option>
                <option value="xl">XL</option>
                <option value="medium">Medium</option>
                <option value="small">Small</option>
              </select>
            </div>
            <div className="quantity">
              <input type="number" defaultValue={1} min={1} />
              <button>Add to Cart</button> <br></br>
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
            <div>
              <p>Delivery:</p>
              <p>
                Free standard shipping on orders over 200.000 before tax, plus
                free returns.
              </p>
              <div className="delivery">
                <p>TYPE</p> <p>HOW LONG</p> <p>HOW MUCH</p>
              </div>
              <hr />
              <div className="delivery">
                <p>Standard delivery</p>
                <p>1-4 business days</p>
                <p>45.000đ</p>
              </div>
              <hr />
              <div className="delivery">
                <p>Express delivery</p>
                <p>1 business day</p>
                <p>100.000đ</p>
              </div>
              <hr />
              <div className="delivery">
                <p>Pick up in store</p>
                <p>1-3 business days</p>
                <p>Free</p>
              </div>
            </div>
          </div>
        </section>
        {/* script tags */}
      </>
    </>
  );
}
