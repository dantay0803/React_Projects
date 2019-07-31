import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Media,
  OverlayTrigger,
  Tooltip,
  ProgressBar,
  Container,
  Jumbotron,
  Nav
} from 'react-bootstrap';
import searchPlaceHolder from '../images/spidermansearchresultplaceholder.jpg';
import infoPlaceHolder from '../images/info.jpg';

const Styles = styled.div`
  .container {
    height: 33rem;
  }

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

const DetailsNav = styled(Nav)`
  .nav-link {
    color: white;
  }

  .nav-link: hover {
    color: var(--bert-gray);
  }
`;

export default class ItemDetails extends Component {
  render() {
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
                    more than human. Diagnosed as schizophrenic, David has been
                    in and out of psychiatric hospitals for years. But after a
                    strange encounter with a fellow patient, he’s confronted
                    with the possibility that the voices he hears and the
                    visions he sees might be real.
                  </p>

                  <h5>Featured Crew</h5>
                  <h6>Noah Hawley</h6>
                  <p>Creator</p>
                </Media.Body>
              </MainInfoMedia>
            </Container>
          </Jumbotron>
        </Jumbotron>
        <DetailsNav className='justify-content-center' activeKey='/home'>
          <Nav.Item>
            <Nav.Link href='/home'>Discussions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-1'>Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Videos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Images</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Changes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Report</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Share</Nav.Link>
          </Nav.Item>
        </DetailsNav>
      </Styles>
    );
  }
}
