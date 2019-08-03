import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Media, CardDeck } from 'react-bootstrap';
import ItemDetailsHeader from './ItemDetailsHeader';
import ItemDetailsNavbar from './ItemDetailsNavbar';
import ItemDetailsInfo from './ItemDetailsInfo';
import ItemDetailsFacts from './ItemDetailsFacts';

const Styles = styled.div`
  .container-fluid {
    padding: 0;
  }
`;

export default class ItemDetailsPage extends Component {
  render() {
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
}
