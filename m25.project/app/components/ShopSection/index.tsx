import React from "react";

export default function index() {
  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box">
              <a href="">
                <div className="img-box">
                  <img src="/assets/images/p1.png" alt="photo" />
                </div>
                <div className="detail-box">
                  <h6>Ring</h6>
                  <h6>
                    Price
                    <span>$200</span>
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
                  <img src="/assets/images/p2.png" alt="photo" />
                </div>
                <div className="detail-box">
                  <h6>Watch</h6>
                  <h6>
                    Price
                    <span>$300</span>
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
                  <img src="/assets/images/p3.png" alt="photo" />
                </div>
                <div className="detail-box">
                  <h6>Teddy Bear</h6>
                  <h6>
                    Price
                    <span>$110</span>
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
                  <img src="/assets/images/p4.png" alt="photo" />
                </div>
                <div className="detail-box">
                  <h6>Flower Bouquet</h6>
                  <h6>
                    Price
                    <span>$45</span>
                  </h6>
                </div>
                <div className="new">
                  <span>New</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">View All Products</a>
        </div>
      </div>
    </section>
  );
}
