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

  return (
    <section className="content-section">
      <Container>
        <Row className="justify-content-center">
          <Col className="form-col">
            <div className="form-holder">
              <h2 className="form-title">{t('Title')}</h2>
              <RegisterForm />
            </div>
          </Col>
          <SeeMore title={t('SeeMore.Title')} text={t('SeeMore.Text')} />
        </Row>
      </Container>
    </section>
  );
}

export default PowerForm;
