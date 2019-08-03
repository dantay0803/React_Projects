import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 25px 0;
  height: 1px;
  background: white;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(var(--bert-navy)),
    to(var(--bert-navy)),
    color-stop(50%, white)
  );
`;

export default function CutsomHR() {
  return (
    <Styles>
      <div />
    </Styles>
  );
}
