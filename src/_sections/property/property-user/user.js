import React, { useContext } from 'react';
import Context from '../../../_context';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Input } from '../../../_components/inputs';
import { Button } from '../../../_components/buttons';

const MainCont = styled.div`
  padding: 4rem;
  //background-color: #dadada;
  //border: 1px solid #EBEBEB;
  height: 100%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12),
              0px 16px 16px rgba(0, 0, 0, .12);
`
const UserCont = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Avatar = styled.img`
  object-fit: cover;
  object-position: center;
  min-height: 48px;
  min-width: 48px;
  height: 60px;
  width: 60px;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    min-height: 76px;
    min-width: 76px;
    height: 120px;
    width: 120px;
    flex-grow: 0;
    flex-shrink: 1;
  }
`
const UserInfoCont = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 1rem;
`
const UserInfoItem = styled.li`
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.main.primaryColor};
`
const ContactForm = styled.form`
  margin-top: 3rem;
  height: 100%;
`
const ContactFormButtons = styled.div`
  margin-top: 1rem;
`

export default ({ data })=> {
  const description = useContext(Context).singleProperty;
  const user = data ? { ...data._comercialUser[0], ...data._comercialUser_person[0] } :  description.relatedUser;

  return(
    <MainCont>
      {console.log("USER USER USER", user)}
      <UserCont>
        <Avatar src={user.avatar} alt={user.lastName} />
        <UserInfoCont>
          <UserInfoItem>
            {`${user.firstName} ${user.lastName} - ${user.jobTitle}`}
          </UserInfoItem>
          <UserInfoItem>
            {user.phone.countryCode + " " + user.phone.areaCode + " " + user.phone.phoneNumber}
          </UserInfoItem>
          <UserInfoItem>
            {user.email}
          </UserInfoItem>
        </UserInfoCont>
      </UserCont>
      <ContactForm
        onSubmit={(e)=> e.preventDefault() }
      >
        <Row>
          <Col xs={12}>
            <Input
              placeholder="Nombre"
              gray
              id="name"
              vertical
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Teléfono"
              gray
              id="phone"
              vertical
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Email"
              gray
              id="email"
              vertical
            />
          </Col>
          <Col xs={12}>
            <Input
              placeholder="Mensaje"
              gray
              id="message"
              vertical
            />
          </Col>   
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button primary block>
                Enviar
              </Button>
            </ContactFormButtons>
          </Col>          
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button primary block>
                LLamar
              </Button>
            </ContactFormButtons>
          </Col>
          <Col xs={12} md={12}>
            <ContactFormButtons>
              <Button primary block>
                whatsapp
              </Button>
            </ContactFormButtons>
          </Col>          
        </Row>
      </ContactForm>
    </MainCont>
  )
}