import React from 'react';
import styled from 'styled-components';
import { Row, Col, Media, Jumbotron } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const Styles = styled.div`
  .jumbotronImage {
    background-image: url(${props => props.backdropPath});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 20rem;
    border-bottom: 5px solid rgba(255, 255, 255, 1);
    padding: 0;
    margin: 0;
  }

  .jumbotronColor {
    background-color: rgba(31, 40, 51, 0.9);
    min-height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const MainInfoMedia = styled(Media)`
  margin-top: 5rem;
  margin-left: 10rem;

  .media > h3,
  h4,
  h5,
  h6 {
    color: white;
  }

  img {
    width: 8rem;
    height: 12rem;
    margin-right: 3rem;
  }
`;

function BasicHeader(props) {
  const { title, releaseYear, posterPath, navigateBack, imagePath } = props;

  return (
    <Styles backdropPath={imagePath}>
      <Jumbotron fluid className='jumbotronImage'>
        <Jumbotron fluid className='jumbotronColor'>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <MainInfoMedia>
                <img
                  src={
                    posterPath !== null
                      ? `https://image.tmdb.org/t/p/original/${posterPath}`
                      : `https://via.placeholder.com/58x87?text=Image+not+available`
                  }
                  alt='Movie poster image'
                />
                <Media.Body>
                  <h3>
                    {title !== undefined ? title : null}(
                    {releaseYear !== undefined && releaseYear !== null
                      ? releaseYear.substring(0, 4)
                      : null}
                    )
                  </h3>
                  <Link onClick={() => navigateBack()}>
                    <p className='mt-3'>Back to details</p>
                  </Link>
                </Media.Body>
              </MainInfoMedia>
            </Col>
          </Row>
        </Jumbotron>
      </Jumbotron>
    </Styles>
  );
}

export default withRouter(BasicHeader);
