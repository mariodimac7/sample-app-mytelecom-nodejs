import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SeeMore } from '../../components';
import { useTranslation } from 'react-i18next';
import { powerForm } from '../../api';

function PowerForm() {
  const { t } = useTranslation('PowerForm');
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  console.log('Parent' + fullname);
  const navigate = useNavigate();
  function handleClick() {
    window.open(
      `https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=5a414741-0f24-455c-a53b-2d7aa93f0a51&env=demo&acct=d06d56f3-b556-4076-9d26-49395c6bbd96&v=2
      &Client_UserName=Mario&Client_Email=mario@dimac.hr`
    );
  }

  return (
    <section className="content-section">
      <Container>
        <Row className="justify-content-center">
          <Col className="form-col">
            <div className="form-holder">
              <h2 className="form-title">{t('Title')}</h2>
              <RegisterForm onSubmit={handleClick} />
            </div>
          </Col>
          <SeeMore title={t('SeeMore.Title')} text={t('SeeMore.Text')} />
        </Row>
      </Container>
    </section>
  );
}

export default PowerForm;
