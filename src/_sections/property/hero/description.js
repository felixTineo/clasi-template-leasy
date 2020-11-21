import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { EnvironmentOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  background-color: #fff;
  min-height: 100%;
  @media(min-width: 768px){
    padding: 2rem 4rem;
    padding-left: 0;
  }
`
const OperationCode = styled.p`
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
  color: ${props => props.theme.main.primaryColor};
`
const Price = styled(Title)`
  color: ${props => props.theme.main.primaryColor};
`
const UbicationCont = styled.div`
  display: inline-flex;
  padding: 2rem;
  border-radius: 6px;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 2rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
  @media(min-width: 768px){
    margin: 0;
  }
`
const MarkerCont = styled.div`
  color: ${props => props.theme.main.primaryColor};
  margin-right: 1rem;
  font-size: 1.5rem;
`


export default ({ description })=> {

  return(
    <MainCont>
      <Row>
        <Col xs ={12}>
          <OperationCode>
            {`${description.operation}-COD.: ${description.code}`}
          </OperationCode>
          <Title>
            {description.title}
          </Title>
          <Price>
            {`${description.currency} ${description.value}`}
          </Price>
          <UbicationCont>
            <MarkerCont>
              <EnvironmentOutlined />
            </MarkerCont>
            <span>
              {
                description.ubication.address
                ? description.ubication.address
                :`${description.ubication.region} / ${description.ubication.commune}`
              }
            </span>
          </UbicationCont>
        </Col>
        <Visible xs>
          <InteractionButtons />
        </Visible>
      </Row>
    </MainCont>
  )
}