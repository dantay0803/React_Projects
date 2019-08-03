import React from 'react';
import styled from 'styled-components';
import {
  Media,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
  Container,
  Jumbotron,
  Row,
  Col
} from 'react-bootstrap';
import searchPlaceHolder from '../../images/spidermansearchresultplaceholder.jpg';
import infoPlaceHolder from '../../images/info.jpg';

const Styles = styled.div`
  .jumbotronImage {
    background-image: url(${infoPlaceHolder});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 40rem;
  }

  .jumbotronColor {
    background-color: rgba(31, 40, 51, 0.9);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40rem;
  }
`;

const MainInfoMedia = styled(Media)`
  margin-top: 3rem;

  .media > h3,
  h4,
  h5,
  h6 {
    color: white;
  }

  img {
    width: 18.75rem;
    height: 28.25rem;
    margin-right: 3rem;
  }

  .releaseYear {
    color: var(--bert-gray);
    font-size: 1rem;
  }

  .progress {
    border: 1px solid var(--bert-gray);
    margin-bottom: 3rem;
  }

  .progress-bar {
    color: black;
    font-weight: bold;
    background-color: var(--bert-blue-bright);
  }
`;

export default function ItemDetailsHeader() {
  return (
    <Styles>
      <Jumbotron fluid className='jumbotronImage'>
        <Jumbotron fluid className='jumbotronColor'>
          <Container>
            <MainInfoMedia>
              <img src={searchPlaceHolder} alt='Generic placeholder' />
              <Media.Body>
                <h2>
                  Spider-Man: Far from Home{' '}
                  <p className='releaseYear'>(2019)</p>
                </h2>
                <OverlayTrigger overlay={<Tooltip>User Score</Tooltip>}>
                  <ProgressBar now={78} label={'78%'} />
                </OverlayTrigger>
                <h5>Overview</h5>
                <p>
                  David Haller, AKA Legion, is a troubled young man who may be
                  more than human. Diagnosed as schizophrenic, David has been in
                  and out of psychiatric hospitals for years. But after a
                  strange encounter with a fellow patient, he’s confronted with
                  the possibility that the voices he hears and the visions he
                  sees might be real.
                </p>

                <h5 className='mt-5'>Featured Crew</h5>
                <Row>
                  <Col>
                    <h6>Jon Watts</h6>
                    <p>Director</p>
                  </Col>
                  <Col>
                    <h6>Erik Sommers</h6>
                    <p>Screenplay</p>
                  </Col>
                  <Col>
                    <h6>Chris McKenna</h6>
                    <p>Writer</p>
                  </Col>
                </Row>
              </Media.Body>
            </MainInfoMedia>
          </Container>
        </Jumbotron>
      </Jumbotron>
    </Styles>
  );
}
