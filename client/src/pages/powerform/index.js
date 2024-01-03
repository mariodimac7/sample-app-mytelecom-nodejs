import React from 'react';
import RegisterForm from './RegisterForm';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SeeMore } from '../../components';
import { useTranslation } from 'react-i18next';
import { powerForm } from '../../api';

function PowerForm() {
  const { t } = useTranslation('PowerForm');

  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      const response = await powerForm(form);
      console.log(`Received response: ${response.data}`);
      navigate('/submitted');
    } catch (error) {
      console.log('handleSubmit error');
      console.log(error);
    }
  };

  return (
    <section className="content-section">
      <Container>
        <Row className="justify-content-center">
          <Col className="form-col">
            <div className="form-holder">
              <h2 className="form-title">{t('Title')}</h2>
              <RegisterForm onSubmit={handleSubmit} />
            </div>
          </Col>
          <SeeMore title={t('SeeMore.Title')} text={t('SeeMore.Text')} />
        </Row>
      </Container>
    </section>
  );
}

export default PowerForm;
