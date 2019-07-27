import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import HomeShowcaseCard from './HomeShowcaseCard.js';

const Styles = styled.div`
  .content {
    width: 100%;
    padding: 0;
    margin-bottom: 3rem;
    position: relative;
  }

  .showcaseTitle {
    color: #66fcf1;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
    margin-left: 6rem;
  }

  .cardList {
    padding-top: 1.25rem;
    overflow-y: hidden;
    overflow-x: scroll;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }

  .cardList::-webkit-scrollbar {
    width: 0 !important;
  }

  .firstCard {
    display: flex;
    flex-direction: row;
    margin-right: 0.3rem;
    margin-left: 6rem;
  }

  .scrollButton {
    position: absolute;
    top: 3.5rem;
    width: 3.75rem;
    height: 9.125rem;
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 6rem;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
  .scrollButtonLeft {
    left: 0rem;
  }

  .scrollButtonRight {
    right: 0rem;
  }
`;

export default class HomeShowcase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollId: props.scrollId,
      elScroll: null,
      scrollPos: 0,
      maxScroll: 0,
      scrollValue: 1745
    };
  }

  componentDidMount() {
    var elScroll = this.refs.scrollElement;
    this.setState({
      elScroll,
      maxScroll: elScroll.scrollWidth - elScroll.offsetWidth
    });
  }

  render() {
    return (
      <Styles>
        <div className='content'>
          <p className='showcaseTitle'>{this.props.title}</p>

          <div ref={'scrollElement'} className='cardList'>
            <div className='firstCard'>
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
              <HomeShowcaseCard />
            </div>
          </div>

          {this.state.elScroll && this.state.scrollPos !== 0 ? (
            <Button
              className='scrollButton scrollButtonLeft'
              onClick={() => {
                this.state.elScroll.scrollBy({
                  top: 0,
                  left: -this.state.scrollValue,
                  behavior: 'smooth'
                });
                this.setState({
                  scrollPos: this.state.scrollPos - this.state.scrollValue
                });
              }}>
              <IoIosArrowBack className='scrollButtonIconLeft' />
            </Button>
          ) : null}

          {this.state.elScroll !== null &&
          this.state.scrollPos < this.state.maxScroll ? (
            <Button
              className='scrollButton scrollButtonRight'
              onClick={() => {
                if (this.state.scrollPos < this.state.maxScroll) {
                  this.state.elScroll.scrollBy({
                    top: 0,
                    left: this.state.scrollValue,
                    behavior: 'smooth'
                  });
                  this.setState({
                    scrollPos: this.state.scrollPos + this.state.scrollValue
                  });
                }
              }}>
              <IoIosArrowForward className='scrollButtonIconRight' />
            </Button>
          ) : null}
        </div>
      </Styles>
    );
  }
}
