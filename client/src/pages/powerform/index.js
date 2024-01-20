import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SeeMore } from '../../components';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Input, useValidation, FormButtons, NumberInput, SelectInput, RadioInput } from '../../components';
import { Form } from 'react-bootstrap';

function PowerForm() {
  const {
    formState: { errors },
  } = useForm();

  const { t } = useTranslation('PowerForm');

  //add variables
  const [formData, setFormData] = useState({ fullname: '', email: '', events: 'Event A' });

  //handle change function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleEventChange = (event) => {
    setEventSelection(event.target.selectedIndex);
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //open powerform link on the submission
  const handleSub = (event) => {
    event.preventDefault();
    window.open(
      `https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=5a414741-0f24-455c-a53b-2d7aa93f0a51&env=demo&acct=d06d56f3-b556-4076-9d26-49395c6bbd96&v=2
      &Client_UserName=${formData.fullname}&Client_Email=${formData.email}&Event=${formData.events}`
    );
  };
  return (
    <section className="content-section">
      <Container>
        <Row className="justify-content-center">
          <Col className="form-col">
            <div className="form-holder">
              <h2 className="form-title">{t('Title')}</h2>
              <Form onSubmit={handleSub}>
                <h4>{t('Please provide your details')}</h4>
                <Form.Group className="mb-4">
                  <Input
                    type="text"
                    id="fullname"
                    name="fullname"
                    onChange={handleChange}
                    label={t('Full Name')}
                    defaultValue={formData.fullname}
                    autoComplete="full-name"
                    errors={errors}
                  />

                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    label={t('Email')}
                    defaultValue={formData.email}
                    autoComplete="email"
                    errors={errors}
                  />
                </Form.Group>

                <h4>{t('EventInfo')}</h4>
                <Form.Group className="mb-4">
                  <SelectInput
                    id="eventSelection"
                    name="events"
                    label={t('Select your Event')}
                    defaultValue={formData.events}
                    options={[t('Event A'), t('Event B'), t('Event C'), t('Event D')]}
                    errors={errors}
                    onChange={handleEventChange}
                  />
                </Form.Group>

                <FormButtons />
              </Form>
            </div>
          </Col>
          <SeeMore title={t('SeeMore.Title')} text={t('SeeMore.Text')} />
        </Row>
      </Container>
    </section>
  );
}

export default PowerForm;
