import React, { Component } from "react";
// import $ from 'jquery'

export default class MainMenu extends Component {
  // constructor() {
  //     super();
  //     this._handleClick = this._handleClick.bind(this);
  //   }

  //   componentDidMount() {
  //     this._handleClick();
  //   }

  //   _handleClick() {
  //     $(function() { // DOM ready
  //         // If a link has a dropdown, add sub menu toggle.
  //         $('.nav-menu ul li a:not(:only-child)').trigger(function(e) {
  //           $(this).siblings('.nav-dropdown').toggle();
  //           // Close one dropdown when selecting another
  //           $('.nav-dropdown').not($(this).siblings()).hide();
  //           e.stopPropagation();
  //         });
  //         // Clicking away from dropdown will remove the dropdown class
  //         $('html').trigger(function() {
  //           $('.nav-dropdown').hide();
  //         });
  //         // Toggle open and close nav styles on click
  //         $('#nav-toggle').trigger(function() {
  //           $('.nav-menu ul').slideToggle();
  //         });
  //         // Hamburger to X toggle
  //         $('#nav-toggle').on('click', function() {
  //           this.classList.toggle('active');
  //         });
  //       }); // end DOM ready
  //   }

  render() {
    return (
      <div>
        <section className="navigation">
          <div className="nav-container">
            <div className="brand">
              <a href="#">Louie</a>
            </div>
            <nav className="nav-menu">
              {/* <div className="nav-mobile">
                <a id="nav-toggle" href="#">
                  <span />
                </a>
              </div> */}
              <ul className="nav-list">
                <li>
                  <a href="http://localhost:3000/">Home</a>
                </li>
                <li>
                  <a href="http://localhost:3000/Effect/">Effects</a>
                </li>
                {/* <li>
                                    <a href="https://www.google.com/">Services</a>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <a href="https://www.google.com/">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/">Web Development</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/">Graphic Design</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">Pricing</a>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">Portfolio</a>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <a href="https://www.google.com/">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/">Web Development</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/">Graphic Design</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="https://www.google.com/">Contact</a>
                                </li> */}
              </ul>
            </nav>
          </div>
        </section>
      </div>
    );
  }
}
