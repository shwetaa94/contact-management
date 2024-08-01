// src/components/ContactList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Contact } from "../../interfaces/Contact";

interface Props {
  contacts: Contact[];
}

const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <div className="flex flex-col bg-blue-100 h-full  p-4">
      <div className="flex justify-between border-b border-gray-400 py-2">
        <h2 className="text-lg font-bold mb-4">Contact List</h2>
        <button className="justify-start bg-blue-600 text-white rounded-lg p-2">
          Create Contact
        </button>
      </div>
      <ul>
        {contacts?.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
