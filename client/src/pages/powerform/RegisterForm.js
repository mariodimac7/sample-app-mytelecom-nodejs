import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, useValidation, FormButtons, NumberInput, SelectInput, RadioInput } from '../../components';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function RegisterForm({ onSubmit }) {
  // Grab register and handleSubmit from useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation('PowerForm');
  const { emailRegExp, formCheckFieldRequired, formCheckNameMaxLength } = useValidation();

  const [eventSelection, setEventSelection] = useState(0);

  const handleEventChange = (evt) => {
    setEventSelection(evt.target.selectedIndex);
  };
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');

  function handleClick() {
    window.open(
      `https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=5a414741-0f24-455c-a53b-2d7aa93f0a51&env=demo&acct=d06d56f3-b556-4076-9d26-49395c6bbd96&v=2
      &Client_UserName=${fullname}&Client_Email=${email}`
    );
  }
  return (
    <>
      <Form onSubmit={handleClick}>
        <h4>{t('Please provide your details')}</h4>
        <Form.Group className="mb-4">
          <Input
            id="fullname"
            name={fullname}
            onChange={(e) => setFullName(e.target.value)}
            label={t('FirstName')}
            autoComplete="given-name"
            {...register('firstName', {
              required: formCheckFieldRequired,
              maxLength: formCheckNameMaxLength,
            })}
            errors={errors}
          />

          <Input
            id="lastName"
            label={t('LastName')}
            autoComplete="family-name"
            {...register('lastName', {
              required: formCheckFieldRequired,
              maxLength: formCheckNameMaxLength,
            })}
            errors={errors}
          />
          <Input
            id="email"
            name={email}
            onChange={(e) => setEmail(e.target.value)}
            label={t('Email')}
            autoComplete="email"
            {...register('signerEmail', {
              required: formCheckFieldRequired,
              pattern: {
                value: emailRegExp,
                message: t('InvalidEmailFormatError'),
              },
            })}
            errors={errors}
          />
        </Form.Group>

        <h4>{t('EventInfo')}</h4>
        <Form.Group className="mb-4">
          <SelectInput
            id="eventSelection"
            label={t('Select your Event')}
            options={[t('Event A'), t('Event B'), t('Event C'), t('Event D')]}
            {...register('eventSelection', {
              required: formCheckFieldRequired,
            })}
            errors={errors}
            onChange={handleEventChange}
          />
        </Form.Group>

        <FormButtons />
      </Form>
    </>
  );
}

export default RegisterForm;