import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../store/contactSlice";
import { Contact } from "../../interfaces/Contact";
import { useNavigate, useSearchParams } from "react-router-dom";

const ContactCard: React.FC = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const id = searchParams.get("id");
  const firstname = searchParams.get("firstname");
  const lastname = searchParams.get("lastname");
  const status = searchParams.get("status");

  const [firstnameState, setFirstname] = useState<string>(firstname || "");
  const [lastnameState, setLastname] = useState<string>(lastname || "");
  const [statusState, setStatus] = useState<"ACTIVE" | "INACTIVE">(
    (status as "ACTIVE" | "INACTIVE") || "ACTIVE" // Default to "ACTIVE"
  );

  useEffect(() => {
    // Update state if params change
    if (firstname) setFirstname(firstname);
    if (lastname) setLastname(lastname);
    if (status) setStatus(status as "ACTIVE" | "INACTIVE");
  }, [firstname, lastname, status]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Create the updated contact object
    const updatedContact: Contact = {
      id: id ? parseInt(id, 10) : Math.floor(Math.random() * 10000), // Generate a random ID if creating a new contact
      firstname: firstnameState,
      lastname: lastnameState,
      status: statusState,
    };
  
    if (id) {
      // If an ID exists, dispatch the editContact action
      dispatch(editContact(updatedContact));
    } else {
      // If no ID exists, dispatch the addContact action
      dispatch(addContact(updatedContact));
    }
    
    // Navigate to the home page or another page
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full bg-blue-100 p-4">
      <h2 className="mb-4 text-lg font-bold">{id ? "Edit Contact" : "Create Contact"}</h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-xl rounded-lg bg-white p-6 shadow-md"
      >
        <div className="mb-4">
          <label className="mb-2 block font-semibold" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="w-full rounded-md border p-2"
            value={firstnameState}
            onChange={(event) => setFirstname(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-semibold" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="w-full rounded-md border p-2"
            value={lastnameState}
            onChange={(event) => setLastname(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-semibold" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="w-full rounded-md border p-2"
            value={statusState}
            onChange={(event) =>
              setStatus(event.target.value as "ACTIVE" | "INACTIVE")
            }
            required
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default ContactCard;
