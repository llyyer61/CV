import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta" style={{ color: "red" }}>
                        About Me
                      </span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a front-end developer with over two years of
                        experience and with over 40 web development project
                        experiences. I have demonstrated outstanding
                        communication and teamwork skills. <br />
                        <br />I have experience developing with PHP, JavaScript,
                        jQuery, HTML 5, CSS 3, React.js, Vue.js, Ajax, JSON,
                        Next.js, Nuxt.js, WordPress, Shopify, Strapi, and
                        Tailwind CSS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites by using
                      PHP,JavaScript, jQuery, HTML 5, CSS 3, React.js, Vue.js,
                      Ajax, JSON, Next.js, Nuxt.js, WordPress, Shopify, Strapi,
                      and Tailwind CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Design</h3>
                    <p>
                      As coming from the design learning background, I have good
                      grasp over fundamental concepts of design. Also, i can use
                      Figma to design any projects, such as APPs or Webs
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Application</h3>
                    <p>
                      I am pursuing my full-time job at Unicent and working with
                      tools like Photoshop (PS), Illustrator (AI), After Effects
                      (AE), Premiere Pro (PR), Figma, Sai, 3ds Max, and Maya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
