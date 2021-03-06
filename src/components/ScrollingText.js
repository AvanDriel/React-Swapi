import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'
//Loading Screen for when data is fetched
const NoScroll = styled.div`
  /* Force the body to fill the entire screen */
  width: 100%;
  height: 100%;
  /* Hide elements that flow outside the viewable space */
  overflow: hidden;
  /* Black background for the screen */
`

const StarWars = styled.div`
  /* Flexbox to center the entire element on the screen */
  display: flex;
  justify-content: center;
  /* This is a magic number based on the context in which this snippet is used and effects the perspective */
  height: 800px;
  /* This sets allows us to transform the text on a 3D plane, and is somewhat a magic number */
  perspective: 400px;
  /* The rest is totally up to personal styling preferences */
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  text-align: center;
`

const CrawlKeyframe = keyframes`
  0% {
    /* The element starts below the screen */
    top: 0;
    /* Rotate the text 20 degrees but keep it close to the viewer */
    transform: rotateX(20deg) translateZ(0);
  }
  100% { 
    /* This is a magic number, but using a big one to make sure the text is fully off the screen at the end */
    top: -6000px;
    /* Slightly increasing the rotation at the end and moving the text far away from the viewer */
    transform: rotateX(25deg) translateZ(-2500px);
  }
`

const Crawl = styled.div`
  /* Position the element so we can adjust the top property in the animation */
  position: relative;
  /* Making sure the text is fully off the screen at the start and end of the animation */
  top: -100px;
  /* Defines the skew origin at the very center when we apply transforms on the animation */
  transform-origin: 50% 100%;
  /* Position the element so we can adjust the top property in the animation */
  position: relative;
  /* Defines the skew origin at the very center when we apply transforms on the animation */
  transform-origin: 50% 100%;
  /* Adds the crawl animation, which plays for one minute */
  animation: ${ CrawlKeyframe } 60s linear;
`

const CrawlTitle = styled.div`
  align-text: center
`

class ScrollingText extends Component {
  render() {
    return (
      <NoScroll>
        <StarWars>
          <Crawl>
            <CrawlTitle>
              <p>Star Wars API</p>
              {/* Take the toload prop and display what is being loaded */}
              <h1 style={{ lineHeight: '200px' }}>Loading { this.props.toLoad }</h1>
            </CrawlTitle>  
          </Crawl> 
        </StarWars>
      </NoScroll>  
    );
  }
}

export default ScrollingText;
