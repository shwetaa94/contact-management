// src/interfaces/Contact.ts
export interface Contact {
    id: number;
    firstname: string;
    lastname: string;
    phone: number;
    status: string;
  }
  export interface ContactState{
    Contacts :Contact[]
  }