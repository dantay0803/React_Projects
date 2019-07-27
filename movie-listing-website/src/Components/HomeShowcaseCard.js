import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { IoIosArrowDropright } from 'react-icons/io';
import pickOfTheWeekImage from '../images/PickOfTheWeek.jpg';

const Styles = styled.div`
  .card {
    width: 17.9rem;
    height: 10.5rem;
    border: none;
    box-shadow: none;
    background-color: transparent;
    margin-right: 0.3rem;
  }

  .card-img-overlay {
    padding: 0;
    margin: 0;
  }

  .card-img-overlay > button {
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    font-size: 0.8rem;
    border: none;
    border-color: transparent;
    width: 100%;
    height: 87%;
    padding: 0.75rem;
    opacity: 0;
  }

  .card-img-overlay>button: hover {
    opacity: 1;
  }

  .card-title {
    margin: 0rem;
    padding: 0;
  }

  .icon {
    padding-top: 0.25rem;
    font-size: 3rem;
  }
`;

export default function HomeShowcaseCard() {
  return (
    <Styles>
      <Card>
        <Card.Img src={pickOfTheWeekImage} alt='Card image' />
        <Card.ImgOverlay>
          <Button>
            <div>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                <br />
                <IoIosArrowDropright className='icon' />
              </Card.Text>
            </div>
          </Button>
        </Card.ImgOverlay>
      </Card>
    </Styles>
  );
}
