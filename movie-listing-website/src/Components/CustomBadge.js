import React from 'react';
import styled from 'styled-components';
import { Badge } from 'react-bootstrap';

const StyledBadge = styled(Badge)`
  background-color: var(--bert-black);
  border: 1px solid var(--bert-gray);
  padding: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  color: white;
  font-family: 'Rubik', sans-serif;
`;

export default function CustomBadge(props) {
  const { text } = props;

  return <StyledBadge>{text}</StyledBadge>;
}
