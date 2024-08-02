import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "../../store/contactSlice";
import { Contact } from "../../interfaces/Contact";
import { Link } from "react-router-dom";
import { MdDelete, MdDoNotDisturb, MdEdit } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ContactList: React.FC = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="flex flex-col h-full bg-blue-100 p-4">
      <div className="flex justify-between border-b border-gray-400 py-2">
        <h2 className="mb-4 text-lg font-bold">Contact List</h2>
        <Link to="/create">
          <button className="rounded-lg bg-blue-600 p-2 text-white">
            Create Contact
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {contacts.length > 0 ? (
          contacts.map((contact: Contact) => (
            <div key={contact.id} className="rounded-md border bg-white">
              <div className="p-4">
                <h1 className="inline-flex items-center text-2xl font-semibold capitalize">
                  {contact.firstname} {contact.lastname}
                </h1>
                <div className="my-4 flex items-center gap-2 text-xl text-gray-600">
                  {contact.status === "ACTIVE" ? (
                    <IoMdCheckmarkCircleOutline className="h-6 w-6 text-green-400" />
                  ) : (
                    <MdDoNotDisturb className="h-6 w-6 text-red-400" />
                  )}
                  {contact.status}
                </div>
                <div className="w-full mt-10 flex justify-between">
                  <Link
                    to={`/create?id=${contact.id}&firstname=${contact.firstname}&lastname=${contact.lastname}&status=${contact.status}`}
                    className="flex items-center justify-center rounded-md bg-blue-400 py-2 text-white hover:bg-blue-500"
                  >
                    <button
                      type="button"
                      className="w-20 px-2 flex font-semibold"
                    >
                      <MdEdit className="mr-2 h-5" />
                      Edit
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="w-20 p-2 flex items-center justify-center rounded-md bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-500"
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                    <MdDelete className="mr-2 h-5 " />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
