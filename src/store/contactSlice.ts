import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact, ContactState } from "../interfaces/Contact";
import { RootState } from "./store";

const demoContacts: Contact[] = [
  {
    id: 1,
    firstname: "shweta",
    lastname: "singh",
    status: "ACTIVE",
  },
];

const initialState: ContactState = {
  Contacts: demoContacts,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.Contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, ...updatedContact } = action.payload;
      const existingContact = state.Contacts.find(
        (contact) => contact.id === id
      );
      if (existingContact) {
        Object.assign(existingContact, updatedContact);
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.Contacts = state.Contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

// Export actions
export const { addContact, editContact, deleteContact } = contactSlice.actions;

// Export selector
export const selectContacts = (state: RootState) => state.contact.Contacts;

// Export reducer
export default contactSlice.reducer;
