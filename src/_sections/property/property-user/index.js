import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../_context';
import { Container, Row, Col, Hidden } from 'react-grid-system';

import Property from './property';
import User from './user';

const MainCont = styled.div`

`

export default ({ data })=> {
  const noData = useContext(Context).singleProperty;
  const state = data ? data : noData;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Property description={state} />
          </Col>
          <Hidden xs>
            <Col xs={6}>
              <User data={state} />
            </Col>
          </Hidden>
        </Row>
      </Container>
    </MainCont>
  )
}