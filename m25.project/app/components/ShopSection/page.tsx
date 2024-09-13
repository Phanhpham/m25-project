"use client";
import { Cart, Product } from "@/interface/product";
import {
  addToCart,
  getCartPrdouctById,
  updateCart,
} from "@/services/cart.service";
import { getAllProduct } from "@/services/product.service";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const account = JSON.parse(localStorage.getItem("user") || "[]");
  const cartState = useSelector((state: any) => state.cartReducer.cart);
  const route = useRouter();
  const handleDetail1 = (id: number) => {
    console.log(11111, id);
    route.push(`/components/Detail/${id}`);
  };
  const productState = useSelector(
    (state: any) => state.productReducer.product
  );
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  useEffect(() => {
    if (account.id) {
      dispatch(getCartPrdouctById);
    }
  }, [dispatch, account.id]);

  const handleAdd = async (product: Product) => {
    const existProduct = cartState.find(
      (cart: Cart) => cart.product.id === product.id
    );
    if (existProduct) {
      const updateProduct = {
        ...existProduct,
        product: {
          ...existProduct.product,
          stock: existProduct.product.stock + 1,
        },
      };
      await dispatch(updateCart(updateProduct));
    } else {
      const newCart = {
        idUser: account.id,
        product: {
          productname: product.productname,
          img: product.img,
          price: product.price,
          stock: 1,
          id: product.id,
        },
      };
      await dispatch(addToCart(newCart));
    }
  };
  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        <div className="row">
          {productState.map((product: Product) => (
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box">
                <div className="img-box">
                  <img
                    onClick={() => handleDetail1(product.id)}
                    src={product.img}
                    alt="photo"
                  />
                </div>
                <div className="detail-box">
                  <h6>{product.productname}</h6>
                  <h6>
                    Price
                    <span>{product.price}</span>
                  </h6>
                </div>
                <div className="new">
                  <button onClick={() => handleAdd(product)}>New</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a href="">View All Products</a>
        </div>
      </div>
    </section>
  );
}
