import React, { Component } from 'react';
import styled from 'styled-components';
import { Jumbotron, Button } from 'react-bootstrap';
import pickOfTheWeekImage from '../images/PickOfTheWeek.jpg';

const Styles = styled.div`
  .jumbotron {
    background: url(${pickOfTheWeekImage}) no-repeat fixed bottom;
    background-size: cover;
    height: 50rem;
    position: relative;
    mask-image: linear-gradient(rgba(0, 0, 0, 1) 75%, transparent);
  }

  .description {
    padding-top: 10rem;
    padding-left: 6rem;
    width: 40rem;
  }

  .pickOfTheWeekDetails {
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    height: 50px;
    width: 150px;
    font-size: 20px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }
  .pickOfTheWeekDetails:hover {
    background-color: rgba(255, 255, 255, 1);
    color: var(--bert-black);
    font-size: 24px;
    transform: scale(1.1);
  }
`;

export default class PickOfTheWeek extends Component {
  render() {
    return (
      <Styles>
        <Jumbotron fluid>
          <div className='description'>
            <h1>Pick of the Week</h1>
            <h2>Luther</h2>
            <p>
              A dark psychological crime drama starring Idris Elba as Luther, a
              man struggling with his own terrible demons, who might be as
              dangerous as the depraved murderers he hunts.
            </p>
            <p>
              <Button className='pickOfTheWeekDetails'>Details</Button>
            </p>
          </div>
        </Jumbotron>
      </Styles>
    );
  }
}
