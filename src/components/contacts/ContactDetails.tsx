// src/components/ContactDetails.tsx
import React from 'react';
// import { useParams } from 'react-router-dom';
import { Contact } from '../../interfaces/Contact';

interface Props {
  contact: Contact;
}

const ContactDetails: React.FC<Props> = ({ contact }) => {
  // const { id } = useParams();

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold mb-4">Contact Details</h2>
      <p className="text-lg font-bold mb-2">First Name:</p>
      <p className="text-lg mb-4">{contact.firstname}</p>
      <p className="text-lg font-bold mb-2">Last Name:</p>
      <p className="text-lg mb-4">{contact.lastname}</p>
      <p className="text-lg font-bold mb-2">Phone:</p>
      <p className="text-lg mb-4">{contact.phone}</p>
    </div>
  );
};

export default ContactDetails;