import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import pickOfTheWeekImage from '../images/PickOfTheWeek.jpg';

const Styles = styled.div`
  .jumbotron {
    background: url(${pickOfTheWeekImage}) no-repeat fixed bottom;
    background-size: cover;
    height: 750px;
    position: relative;
    z-index: -2;
  }

  .description {
    padding-top: 75px;
    width: 450px;
  }

  .pickOfTheWeekDetails {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
    height: 50px;
    width: 150px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default class PickOfTheWeek extends Component {
  render() {
    return (
      <Styles>
        <Jumbotron fluid>
          <Container>
            <div className='description'>
              <h1>Pick of the Week</h1>
              <h2>Luther</h2>
              <p>
                A dark psychological crime drama starring Idris Elba as Luther,
                a man struggling with his own terrible demons, who might be as
                dangerous as the depraved murderers he hunts.
              </p>
              <p>
                <Button className='pickOfTheWeekDetails'>Details</Button>
              </p>
            </div>
          </Container>
        </Jumbotron>
      </Styles>
    );
  }
}
