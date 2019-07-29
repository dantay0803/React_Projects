import React from 'react';
import styled from 'styled-components';
import {
  Media,
  Card,
  ProgressBar,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import searchPlaceHolder from '../images/spidermansearchresultplaceholder.jpg';

const Styles = styled.div`
  img {
    border: 1px 0 solid rgba(255, 255, 255, 0.125);
    border-right: none;
  }

  .progress {
    border: 1px solid var(--bert-gray);
  }

  .progress-bar {
    color: black;
    font-weight: bold;
    background-color: var(--bert-blue-bright);
  }
`;

const StyledMedia = styled(Media)`
  margin-bottom: 2rem;
`;

const StyledCard = styled(Card)`
  border-radius: 0;
  color: black;
  height: 17.38rem;

  .card-title {
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .card-text {
    padding-top: 1rem;
  }
`;

export default function SearchResultItem() {
  return (
    <Styles>
      <StyledMedia>
        <img
          width={185}
          height={278}
          src={searchPlaceHolder}
          alt='Generic placeholder'
        />
        <Media.Body>
          <StyledCard>
            <Card.Body>
              <Card.Title>Spider-Man: Far From Home</Card.Title>
              <small className='text-muted'>June 28, 2019</small>
              <Card.Text>
                Peter Parker and his friends go on a summer trip to Europe.
                However, they will hardly be able to rest - Peter will have to
                agree to help Nick Fury uncover the mystery of creatures that
                cause natural disasters and destruction throughout the
                continent.
              </Card.Text>
              <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                <ProgressBar now={78} label={'78%'} />
              </OverlayTrigger>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Full Details</small>
            </Card.Footer>
          </StyledCard>
        </Media.Body>
      </StyledMedia>
    </Styles>
  );
}
