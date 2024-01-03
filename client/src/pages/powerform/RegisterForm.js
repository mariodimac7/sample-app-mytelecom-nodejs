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

  const { t } = useTranslation('PurchaseDevice');
  const { emailRegExp, formCheckFieldRequired, formCheckNameMaxLength } = useValidation();

  const [eventSelection, setEventSelection] = useState(0);

  const handleEventChange = (evt) => {
    setEventSelection(evt.target.selectedIndex);
  };

  return (
    <>
      <Form onSubmit={handleSubmit((form) => onSubmit({ ...form, eventSelection }))}>
        <h4>{t('Please provide your details')}</h4>
        <Form.Group className="mb-4">
          <Input
            id="firstName"
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
            id="signerEmail"
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
