import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Media, CardDeck } from 'react-bootstrap';
import ItemDetailsHeader from './ItemDetailsHeader';
import ItemDetailsNavbar from './ItemDetailsNavbar';
import ItemDetailsInfo from './ItemDetailsInfo';
import ItemDetailsFacts from './ItemDetailsFacts';
import config from '../../Config';

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }
`;

export default function ItemDetailsPage(props) {
  const [searchResults, setSearchResults] = useState(null);
  const { cat, id } = props.match.params;

  useEffect(() => {
    const fetchData = () => {
      fetch(`
      https://api.themoviedb.org/3/${cat}/${id.replace('id=', '')}?api_key=${
        config.API_KEY_V3
        }`)
        .then(resp => resp.json())
        .then(data => {
          setSearchResults(data);
        })
        .catch(err => console.log(`Could not fetch data - Error: ${err}`));
    };

    fetchData();
  }, []);

  return (
    <Styles>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <Row>
              <Col lg={12}>
                <ItemDetailsHeader />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <ItemDetailsNavbar />
              </Col>
            </Row>
            <Row>
              <Col lg={3} />
              <Col lg={6} className='mt-4'>
                <ItemDetailsInfo />
              </Col>
              <Col lg={3} className='mt-4'>
                <ItemDetailsFacts />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
}
