import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import Testimonial10 from '../components/testimonial10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Talentmapp</title>
        <meta property="og:title" content="Talentmapp" />
      </Helmet>
      <section className="home-hero">
        <header className="home-header">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src="/logos/logo1-200h.png"
                  className="home-logo1"
                />
              </div>
              <div className="home-right">
                <div className="home-get-started">
                  <span className="home-text03">Get started</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container2">
              <Script
                html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </header>
        <header className="home-content">
          <animate-on-reveal
            animation="none"
            duration="300ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <h1 data-thq-animate-on-reveal="true" className="home-text04">
              Discover the Right Connections Faster Than Ever
            </h1>
          </animate-on-reveal>
          <p className="home-text05">
            Harness the power of AI to refine and expedite your professional
            networking.
          </p>
          <div className="home-get-started1">
            <span className="home-text06">Get started</span>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <img
            alt="pastedImage"
            src="/hero%20image-1200w.png"
            loading="lazy"
            className="home-image"
          />
        </div>
      </section>
      <section className="home-features">
        <animate-on-reveal
          animation="fadeInUp"
          duration="3000ms"
          delay="0s"
          direction="normal"
          easing="ease-in-out"
          iteration="1"
        >
          <div data-thq-animate-on-reveal="true" className="home-title">
            <span className="home-text07">
              Get all the features in one place. Be amazed!
            </span>
            <span className="home-text08">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>eiusmod tempor incididunt.</span>
            </span>
          </div>
        </animate-on-reveal>
        <div className="home-cards">
          <div className="home-container3">
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-schedule card"
              >
                <img
                  alt="pastedImage"
                  src="https://framerusercontent.com/images/3axCbSta4PfMp8YcsaMRlYnUw.webp"
                  className="home-icon2"
                />
                <span className="home-text11">Schedule</span>
                <span className="home-text12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-publish card"
              >
                <img
                  alt="pastedImage"
                  src="https://framerusercontent.com/images/4iI9yyG7K5byKcS6UFJOTWm1Zw.webp"
                  className="home-icon3"
                />
                <span className="home-text13">Publish</span>
                <span className="home-text14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedr
                </span>
              </div>
            </animate-on-reveal>
          </div>
          <div className="home-container4">
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-analyze card"
              >
                <img
                  alt="pastedImage"
                  src="https://framerusercontent.com/images/jg0hGGyhTvlOKia8R6PiLec0.webp"
                  className="home-icon4"
                />
                <span className="home-text15">Analyze</span>
                <span className="home-text16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="home-get-leads card"
              >
                <img
                  alt="pastedImage"
                  src="https://framerusercontent.com/images/Q4OcElq8RHlYLe29PbuJ6VGjoXg.webp"
                  className="home-icon5"
                />
                <span className="home-text17">Get applications</span>
                <span className="home-text18">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </span>
              </div>
            </animate-on-reveal>
          </div>
        </div>
      </section>
      <animate-on-reveal
        animation="fadeInUp"
        duration="3000ms"
        delay="0s"
        direction="normal"
        easing="ease"
        iteration="1"
      >
        <section data-thq-animate-on-reveal="true" className="home-statistics">
          <div className="home-container5">
            <ActiveUsers
              caption="— Active users"
              statistic="3.5M"
            ></ActiveUsers>
            <ActiveUsers caption="— Brands" statistic="50k"></ActiveUsers>
            <ActiveUsers
              caption="— Accounts Managed"
              statistic="250K"
            ></ActiveUsers>
            <ActiveUsers caption="— Active leads" statistic="30M"></ActiveUsers>
          </div>
        </section>
      </animate-on-reveal>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container6">
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-left1">
                <span className="home-text19 sub-title">
                  Content Management
                </span>
                <span className="home-text20 title">
                  Find your job in just one place.
                </span>
                <span className="home-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started2">
                  <span className="home-text22">Get started</span>
                </div>
              </div>
            </animate-on-reveal>
            <div className="home-image-container">
              <animate-on-reveal
                animation="fadeInUp"
                duration="3000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <video
                  src="/car%20(1).mp4"
                  poster="/car-1200w.png"
                  preload="metadata"
                  autoPlay="true"
                  controls="true"
                  data-thq-animate-on-reveal="true"
                  className="home-video"
                ></video>
              </animate-on-reveal>
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <animate-on-reveal
                animation="fadeInUp"
                duration="3000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <img
                  alt="pastedImage"
                  src="/test-1200w.png"
                  data-thq-animate-on-reveal="true"
                  className="home-cards-image"
                />
              </animate-on-reveal>
            </div>
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-right1">
                <span className="home-text23 sub-title">
                  Reporting Metrics
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h2 className="home-text24 title">
                  Advanced analytics, easy to understand.
                </h2>
                <div className="home-category">
                  <span className="home-text25">Power reports</span>
                  <span className="home-text26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                  <span className="home-text27">Example -&gt;</span>
                </div>
              </div>
            </animate-on-reveal>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container7">
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-left2">
                <span className="home-text28">Improve Scheduling</span>
                <h2 className="home-text29 title">
                  Powerful scheduler that saves you time
                </h2>
                <span className="home-text30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started3">
                  <span className="home-text31">Get started</span>
                </div>
              </div>
            </animate-on-reveal>
            <div className="home-image-container2">
              <animate-on-reveal
                animation="fadeInUp"
                duration="3000ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <img
                  alt="pastedImage"
                  src="/calendar-1200w.png"
                  data-thq-animate-on-reveal="true"
                  className="home-cards-image1"
                />
              </animate-on-reveal>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container1">
          <animate-on-reveal
            animation="fadeInUp"
            duration="3000ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div data-thq-animate-on-reveal="true" className="home-heading">
              <span className="home-text32">How it works</span>
              <span className="home-text33 title">
                Being social and getting leads has never been easier
              </span>
            </div>
          </animate-on-reveal>
          <animate-on-reveal
            animation="fadeInUp"
            duration="3000ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <div data-thq-animate-on-reveal="true" className="home-category1">
              <div className="home-headng">
                <span className="home-text34">
                  1 — Sign up
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text35">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  vv
                </span>
                <div className="home-get-started4">
                  <span className="home-text36">Get started</span>
                </div>
              </div>
              <div className="home-container8">
                <img
                  alt="pastedImage"
                  src="/pastedimage-k5xi%201-1200w.png"
                  className="home-pasted-image"
                />
              </div>
            </div>
          </animate-on-reveal>
          <div className="home-row">
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-category2">
                <div className="home-headng1">
                  <span className="home-text37">2 — Act</span>
                  <span className="home-text38">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/pastedimage-ibg-1200w.png"
                  className="home-pasted-image1"
                />
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInUp"
              duration="3000ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div data-thq-animate-on-reveal="true" className="home-category3">
                <div className="home-headng2">
                  <span className="home-text39">3— Act</span>
                  <span className="home-text40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. vv
                  </span>
                </div>
                <img
                  alt="pastedImage"
                  src="/stats-1200w.png"
                  className="home-pasted-image2"
                />
              </div>
            </animate-on-reveal>
          </div>
        </div>
      </section>
      <Testimonial10></Testimonial10>
      <section className="home-action-bar">
        <animate-on-reveal
          animation="fadeInUp"
          duration="3000ms"
          delay="0s"
          direction="normal"
          easing="ease"
          iteration="1"
        >
          <div data-thq-animate-on-reveal="true" className="home-action">
            <div className="home-heading1">
              <span className="home-text41 title">
                <span>Get Started Now</span>
                <span>!</span>
              </span>
              <span className="home-text44">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <div className="home-get-started5">
                <span className="home-text45">
                  <span>Start free</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-images">
              <img
                alt="image"
                src="/calendar%202-1200w.png"
                className="home-image1"
              />
            </div>
          </div>
        </animate-on-reveal>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-right2">
            <div className="home-category4">
              <span className="home-text48">Company</span>
              <div className="home-links1">
                <span className="home-text49">About</span>
                <span className="home-text50">Team</span>
                <span className="home-text51">News</span>
              </div>
            </div>
            <div className="home-category5">
              <span className="home-text52">Solutions</span>
              <div className="home-links2">
                <span className="home-text53">Twitter</span>
                <span className="home-text54">Linkedin</span>
                <span className="home-text55">Facebook</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/logo-200h.png"
            className="home-branding"
          />
          <span className="home-text56">Copyright © Talentmapp - 2024</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
