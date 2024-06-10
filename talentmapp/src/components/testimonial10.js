import React from 'react'

import PropTypes from 'prop-types'

import './testimonial10.css'

const Testimonial10 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial10-max-width thq-section-max-width">
        <div
          data-thq="slider"
          data-loop="false"
          data-autoplay="false"
          data-navigation="true"
          data-pagination="true"
          className="testimonial10-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="testimonial10-slider-slide swiper-slide"
            >
              <div className="testimonial10-content">
                <img
                  alt="ABC Company Logo"
                  src="/logos/layer1-1500h.png"
                  className="testimonial10-logo"
                />
                <p className="testimonial10-text thq-body-large">
                  {props.review1}
                </p>
                <div className="testimonial10-avatar">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial10-avatar-image thq-img-ratio-1-1 thq-img-round"
                  />
                  <div className="testimonial10-avatar-content">
                    <span className="testimonial10-text1 thq-body-small">
                      {props.author1Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial10-slider-slide1 swiper-slide"
            >
              <div className="testimonial10-content1">
                <img
                  alt="XYZ Inc. Logo"
                  src="/pastedimage-no9b-1500h.png"
                  className="testimonial10-logo1"
                />
                <p className="testimonial10-text3 thq-body-large">
                  {props.review11}
                </p>
                <div className="testimonial10-avatar1">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial10-avatar-image1 thq-img-round"
                  />
                  <div className="testimonial10-avatar-content1">
                    <span className="testimonial10-text4 thq-body-small">
                      {props.author2Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-thq="slider-slide"
              className="testimonial10-slider-slide2 swiper-slide"
            >
              <div className="testimonial10-content2">
                <img
                  alt={props.company3LogoAlt}
                  src="/logos/pinterest%20logo-1500h.png"
                  className="testimonial10-logo2"
                />
                <p className="testimonial10-text6 thq-body-large">
                  {props.review12}
                </p>
                <div className="testimonial10-avatar2">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial10-avatar-image2 thq-img-round"
                  />
                  <div className="testimonial10-avatar-content2">
                    <span className="testimonial10-text7 thq-body-small">
                      {props.author3Name}
                    </span>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-thq="slider-pagination"
            className="testimonial10-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
      </div>
    </div>
  )
}

Testimonial10.defaultProps = {
  author2Alt: 'Image of Jane Smith',
  author1Position: 'CEO, ABC Company',
  company3LogoAlt: '123 Enterprises Logo',
  author3Src:
    'https://images.unsplash.com/photo-1563584316028-2b70b3a3a8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODAzMDkwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'John Doe',
  author3Position: 'Founder, 123 Enterprises',
  company1LogoAlt: 'ABC Company Logo',
  review11:
    'The analytics provided are very insightful and have helped us tailor our content strategy effectively.',
  company2LogoAlt: 'XYZ Inc. Logo',
  author2Name: 'Jane Smith',
  review12:
    'Their lead generation tactics have brought in quality leads for our business. Highly recommend their services.',
  author3Alt: 'Image of David Johnson',
  author2Position: 'Marketing Manager, XYZ Inc.',
  review1:
    'Great social media management service! Our engagement has increased significantly since we started using their services.',
  author3Name: 'David Johnson',
  company1LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  company2LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author1Src:
    'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODAzMDkwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  company3LogoSrc:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  author2Src:
    'https://images.unsplash.com/photo-1557555187-23d685287bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODAzMDkwM3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial10.propTypes = {
  author2Alt: PropTypes.string,
  author1Position: PropTypes.string,
  company3LogoAlt: PropTypes.string,
  author3Src: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  company1LogoAlt: PropTypes.string,
  review11: PropTypes.string,
  company2LogoAlt: PropTypes.string,
  author2Name: PropTypes.string,
  review12: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.string,
  review1: PropTypes.string,
  author3Name: PropTypes.string,
  company1LogoSrc: PropTypes.string,
  company2LogoSrc: PropTypes.string,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  company3LogoSrc: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial10
