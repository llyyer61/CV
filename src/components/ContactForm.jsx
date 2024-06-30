import React, { Component } from "react";

export default class ContactForm extends Component {
  render() {
    return (
      <div>
        <section id="contact">
          <h1 className="section-header">Contact</h1>
          <div className="contact-wrapper">
            {/* Left contact page */}
            <form id="contact-form" className="form-horizontal">
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="NAME"
                    name="name"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="EMAIL"
                    name="email"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <textarea
                className="form-control"
                rows={10}
                placeholder="MESSAGE"
                name="message"
                required
                defaultValue={""}
              />
              <button
                className="btn btn-primary send-button"
                id="submit"
                type="submit"
                value="SEND"
              >
                <div className="alt-send-button">
                  <img
                    className="contact_form_send"
                    src="../images/send.svg"
                    alt="local"
                  />
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>
            {/* Right contact page */}
            <div className="direct-contact-container">
              <ul className="contact-list">
                <li className="list-item">
                  <img
                    className="contact_form_local"
                    src="../images/local.svg"
                    alt="local"
                  />
                  <span className="contact-text place">Melbourne, VIC</span>
                </li>
                <li className="list-item">
                  <i className="fa fa-phone fa-2x">
                    <span className="contact-text phone">
                      <a href="tel:0424730124" title="Give me a call">
                        0424730124
                      </a>
                    </span>
                  </i>
                </li>
                <li className="list-item">
                  <i className="fa fa-envelope fa-2x">
                    <span className="contact-text gmail">
                      <a
                        href="mailto:550366338@qq.com"
                        title="Send me an email"
                      >
                        550366338@qq.com
                      </a>
                    </span>
                  </i>
                </li>
              </ul>
              <hr className="contact_form_hr" />
              <ul className="social-media-list">
                <li className="contact-twitter">
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    className="contact-icon"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="contact_form_twitter"
                      src="../images/twitter_w.svg"
                      alt="twitter"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    className="contact-icon"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-codepen" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    className="contact-icon"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    className="contact-icon"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <hr />
              <div className="spacer_inner_100"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
