import { useState } from 'react';

//This component will use a Webform - check all the components and missing parts
export default function WebForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(
      `https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=5a414741-0f24-455c-a53b-2d7aa93f0a51&env=demo&acct=d06d56f3-b556-4076-9d26-49395c6bbd96&v=2
      &Client_UserName=${formData.name}&Client_Email=${formData.email}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
