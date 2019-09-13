import React from 'react';
import styled from 'styled-components';
import { Card, Media } from 'react-bootstrap';

const SocialCard = styled(Card)`
  background-color: var(--bert-black);
  color: var(--bert-white);
  border: none;
  border-radius: 0;
  font-size: 0.9rem;
  overflow: hidden;
  margin: 1rem;
`;

export default function UserReview(props) {
  const { author, content } = props;

  return (
    <SocialCard>
      <Card.Body>
        <Media>
          <Media.Body>
            <h5>{author} Says</h5>
            <p>{content}</p>
          </Media.Body>
        </Media>
      </Card.Body>
    </SocialCard>
  );
}
