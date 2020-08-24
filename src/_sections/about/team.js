import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  padding: 4rem 0 0;
  @media(min-width: 768px){
    padding: 4rem 0;
  }
`

const Title = styled.h2`
  font-size: 50px;
  color: ${props => props.theme.main.primaryColor};
  font-weight: 300;
  margin-bottom: 7rem;
  text-align: center;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4rem;
  @media(min-width: 768px){
    margin: 0;
  }
`
const Avatar = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  object-position: cover;
`
const Name = styled.p`
  margin-top: 2rem;
  font-weight: bold;
`
const Description = styled.p`
  height: 184px;
  overflow: hidden;
  text-align: center;
`
const ContactCont = styled.ul`
  color: ${props => props.theme.main.primaryColor};
  list-style: none;
  padding: 0;
  margin: 0;
`
const ContactInfo = styled.li`
  font-weight: bold;
  text-align: center;
`

export default ()=> {
  const state = useContext(Context).about.team;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>
              ¿Quienes somos?
            </Title>
          </Col>
          {
            state.members.map(m => (
              <Col xs={12} md={3} key={m.id}>
                <Card>
                  <Avatar src={m.avatar} alt={m.lastName} />
                  <Name>{m.firstName + " " + m.lastName}</Name>
                  <Description>
                    {m.description}
                  </Description>
                  <ContactCont>
                    <ContactInfo>
                      {m.email}
                    </ContactInfo>
                    <ContactInfo>
                      {m.phone}
                    </ContactInfo>
                  </ContactCont>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </MainCont>
  )
}