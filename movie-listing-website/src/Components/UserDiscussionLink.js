import React from 'react';
import styled from 'styled-components';
import { Card, Media, Col, Row } from 'react-bootstrap';

const SocialCard = styled(Card)`
  color: var(--bert-black);
  border: none;
  border-radius: 0;
  font-size: 0.9rem;
  overflow: hidden;
  margin: 1rem;

  img {
    border-radius: 50%;
  }
`;

export default function UserDiscussionLink() {
  return (
    <SocialCard>
      <Card.Body>
        <Media>
          <img
            width={32}
            height={32}
            className=' align-self-start mr-3'
            src='https://via.placeholder.com/32'
            alt='Generic placeholder'
          />
          <Media.Body>
            <Row>
              <Col lg={3}>No Third Film</Col>
              <Col lg={3}>Open</Col>
              <Col lg={3}>9</Col>
              <Col lg={3}>Jul 30, 2019 at 12:51 PM by autoexec.batman</Col>
            </Row>
          </Media.Body>
        </Media>
      </Card.Body>
    </SocialCard>
  );
}
