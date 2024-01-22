import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SeeMore } from '../../components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Input, useValidation, FormButtons, NumberInput, SelectInput, RadioInput } from '../../components';
import { Form } from 'react-bootstrap';
import WebformForm from './webformform';

function PowerForm() {
  const {
    formState: { errors },
  } = useForm();

  const { t } = useTranslation('WebForm');

  return (
    <section className="content-section">
      <Container>
        <Row className="justify-content-center">
          <Col className="form-col">
            <div className="form-holder">
              <h2 className="form-title">{t('Title')}</h2>
              <WebformForm />
            </div>
          </Col>
          <SeeMore title={t('SeeMore.Title')} text={t('SeeMore.Text')} />
        </Row>
      </Container>
    </section>
  );
}

export default PowerForm;
