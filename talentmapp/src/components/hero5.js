import React from 'react'

import PropTypes from 'prop-types'

import './hero5.css'

const Hero5 = (props) => {
  return (
    <div className="hero5-header19 thq-section-padding">
      <div className="hero5-max-width thq-section-max-width thq-flex-row">
        <video
          src="https://videos.pexels.com/video-files/5854603/5854603-hd_2048_1080_24fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/5854603/pictures/preview-0.jpg"
          autoPlay="true"
          className="hero5-video"
        ></video>
        <div className="hero5-column">
          <div className="hero5-content">
            <h1 className="hero5-text thq-heading-1">{props.heading1}</h1>
            <p className="hero5-text1 thq-body-large">{props.content1}</p>
            <div className="hero5-actions">
              <button className="thq-button-filled hero5-button">
                <span className="thq-body-small">{props.action1}</span>
              </button>
              <button className="thq-button-outline hero5-button1">
                <span className="thq-body-small">{props.action2}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero5.defaultProps = {
  placeholderImageSrc:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxODAzMzEyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Elevate Your Social Media Presence',
  video1Src:
    'https://videos.pexels.com/video-files/5854603/5854603-hd_2048_1080_24fps.mp4',
  action2: 'Learn More',
  content1:
    'Our services offer social media management with advanced analytics and lead generation tactics to boost your online presence.',
  action1: 'Get Started',
  video1Poster:
    'https://images.pexels.com/videos/5854603/pictures/preview-0.jpg',
}

Hero5.propTypes = {
  placeholderImageSrc: PropTypes.string,
  heading1: PropTypes.string,
  video1Src: PropTypes.string,
  action2: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  video1Poster: PropTypes.string,
}

export default Hero5
