import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Contact, ContactState } from '../interfaces/Contact';


const demoContacts: Contact[] = [

  {
    id: 1,
    firstname: "shweta",
    lastname: "singh",
    phone: 1234567890,
    status:"ACTIVE"

  },

];

const initialState: ContactState = {
  Contacts: demoContacts,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.Contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      state.Contacts = state.Contacts.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const editedContact = action.payload;
      const index = state.Contacts.findIndex(
        (contact) => contact.id === editedContact.id
      );
      if (index !== -1) {
        state.Contacts[index] = editedContact;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;