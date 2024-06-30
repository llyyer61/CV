import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="iphone">
            <div className="header">
              <div className="order-summary">
                <div className="order-status">Arriving date</div>
                <div className="order-date">19 April, 2022</div>
                <div className="order-day">Friday</div>
              </div>
              <div className="action-btn">
                <div className="back-btn"></div>
              </div>
            </div>
            <div className="hero-img-container">
              <div className="triangle1" />
              <div className="arc" />
              <div className="pattern" />
              <img
                src="https://drive.google.com/uc?id=15iXUI6DkRr5Zcp0yH5uF2U47ycr-WzUY"
                className="hero-img"
                alt="aa"
              />
            </div>
            <div className="order-status-container">
              <div className="status-item first">
                <div className="status-circle" />
                <div className="status-text">today</div>
              </div>
              <div className="status-item second">
                <div className="status-circle" />
                <div className="status-text">Shipped</div>
              </div>
              <div className="status-item">
                <div className="status-circle" />
                <div className="status-text green">
                  <span>Out</span>
                  <span>for delivery</span>
                </div>
              </div>
              <div className="status-item">
                <div className="status-circle" />
                <div className="status-text green">
                  <span>Ariving</span>
                  <span>03&nbsp;-&nbsp;21</span>
                </div>
              </div>
            </div>
            <div className="order-details-container">
              <div className="odc-header">
                <div className="cta-text">See your product details</div>
                <div className="cta-button-container">
                  <button className="cta-button">View</button>
                </div>
              </div>
              <div className="odc-wrapper">
                <div className="odc-header-line">Your order details</div>
                <div className="odc-header-details">
                  Your product details (order 040-904-790)
                </div>
                <div className="product-container">
                  <div className="product">
                    <div className="product-photo">
                      <img
                        src="../logo192.png"
                        className="img-photo"
                        alt="aa"
                      />
                    </div>
                    <div className="product-desc">
                      <span>Nike Air Jordan 1</span>
                      <span>9740 INR</span>
                    </div>
                  </div>
                  <div className="product">
                    <div className="product-photo">
                      <img
                        src="../logo512.png"
                        className="img-photo"
                        alt="aa"
                      />
                    </div>
                    <div className="product-desc">
                      <span>Alex rider: Never say die Novel 12</span>
                      <span>655 INR</span>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  className="card_a_button"
                  rel="noopener noreferrer"
                >
                  <div className="cancellation">Request Cancellation</div>
                </a>
                <div className="shipping-desc">Your Shipping Address</div>
                <div className="shipping-address">
                  Mahagun Moderne
                  <br />
                  DELHI
                  <br />
                  201305
                  <br />
                  GAUTAM BUDH NAGAR, GHAZIABAD
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
