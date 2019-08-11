import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import { IoIosArrowDropright } from 'react-icons/io';

const Styles = styled.div`
  .card {
    width: 17.9rem;
    height: 9.1rem;
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
    height: 100%;
    padding: 0;
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

export default function HomeShowcaseCard(props) {
  return (
    <Styles>
      <Card>
        <Card.Img
          src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`}
          alt='Card image'
        />
        <Card.ImgOverlay>
          <Button>
            <div>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                {`${props.overview.substring(0, 94)}...`}
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
