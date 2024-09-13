"use client";
import { getCartPrdouctById } from "@/services/cart.service";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const { id } = useParams();
  const cartState = useSelector((state: any) => state.cartReducer.cart);
  console.log(cartState);
  const router = useRouter();
  const account = JSON.parse(localStorage.getItem("user") || "[]");
  const dispatch = useDispatch();
  console.log(11111, account);

  useEffect(() => {
    if (account.id) {
      dispatch(getCartPrdouctById(account.id));
    }
  }, [dispatch, account.id]);

  const handleClick = (id: number) => {
    router.push(`/components/CartProduct/${id}`);
  };

  return (
    <header className="header_section">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>Giftos</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="" />
        </button>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="shop.html">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="why.html">
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="testimonial.html">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="user_option">
            <a href="">
              <i className="fa fa-user" aria-hidden="true" />
              <Link href="/components/Login">{account.username}</Link>
            </a>
            <button onClick={() => handleClick(account.id)}>
              <i className="fa fa-shopping-bag" aria-hidden="true" />
              <span className="rounded w-3 h-3">{cartState.length}</span>
            </button>
            <form className="form-inline ">
              <button className="btn nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
