import React from 'react';
import styled from 'styled-components';
import { Container, Col, Row } from 'react-bootstrap';
import Logo from '../../images/logo.png';
import { withRouter, Link } from 'react-router-dom';

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  min-height: 200%;

  .col-lg-8 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

function NoMatchPage(props) {
  return (
    <StyledContainer fluid>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <img src={Logo} alt='Website Logo' />
          <br />
          <h1>
            Whoops! Looks like we couldn't find what you were looking for.
          </h1>
          <h2>404</h2>
          <Link onClick={() => props.history.goBack()}>
            <p className='mt-3'>Let's take a step back</p>
          </Link>
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default withRouter(NoMatchPage);
