import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, useValidation, FormButtons, NumberInput, SelectInput, RadioInput } from '../../components';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function WebformForm() {
  // Grab register and handleSubmit from useForm hook
  const {
    formState: { errors },
  } = useForm();

  const { t } = useTranslation('PowerForm');
  const { emailRegExp, formCheckFieldRequired, formCheckNameMaxLength } = useValidation();

  //add variables
  const [formData, setFormData] = useState({ fullname: '', email: '', message: '' });

  //handle change function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  //open powerform link on the submission
  const handleSub = (event) => {
    event.preventDefault();
    window.open(`https://demo.services.docusign.net/webforms-ux/v1.0/forms/1ef42f9a746eb72c7547ae0a2e20d382`);
  };
  return (
    <>
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

        <FormButtons />
      </Form>
    </>
  );
}

export default WebformForm;
