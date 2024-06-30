import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="flex-slide home">
          <div className="flex-title flex-title-home">Home</div>
          <div className="flex-about flex-about-home">
            <p>Click here to navigate to the home section of the website</p>
          </div>
        </div>
        <div className="flex-slide about">
          <div className="flex-title">About</div>
          <div className="flex-about">
            <p>Click here to navigate to the About section of the website</p>
          </div>
        </div>
        <div className="flex-slide work">
          <div className="flex-title">Work</div>
          <div className="flex-about">
            <p>Listing relevant snippets of work:</p>
            <ul>
              <li>First piece of work</li>
              <li>Second piece of work</li>
              <li>Third piece of work</li>
            </ul>
          </div>
        </div>
        <div className="flex-slide contact">
          <div className="flex-title">Contact</div>
          <div className="flex-about">
            <form className="slider-contact-form">
              <p>
                Email <br></br>
                <input
                  className="slider-contact-input"
                  type="text"
                  name="email"
                />
              </p>
              <p>
                Comment <br></br>
                <textarea
                  className="slider-contact-textarea"
                  type="text"
                  name="comment"
                  row={5}
                  defaultValue={""}
                />
              </p>
              <p>
                <input
                  className="slider-contact-send"
                  type="submit"
                  defaultValue={"Send Messages"}
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
