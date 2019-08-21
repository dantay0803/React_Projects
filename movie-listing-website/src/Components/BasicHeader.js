import React from 'react';
import styled from 'styled-components';
import { Row, Col, Media } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';

const StyledRow = styled(Row)`
  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
  padding-bottom: 2rem;
`;

function BasicHeader(props) {
  const { posterPath, navigateBack } = props;

  return (
    <StyledRow className='pageHeader'>
      <Col lg={{ span: 8, offset: 3 }}>
        <Media>
          <img
            width={58}
            height={87}
            className='align-self-center mr-3'
            src={`https://image.tmdb.org/t/p/original/${posterPath}`}
            alt='Generic placeholder'
          />
          <Media.Body>
            <h4>Spider-Man: Far from Home (2019)</h4>
            <Link onClick={() => navigateBack()}>
              <p className='mt-3'>Back to details</p>
            </Link>
          </Media.Body>
        </Media>
      </Col>
    </StyledRow>
  );
}

export default withRouter(BasicHeader);
