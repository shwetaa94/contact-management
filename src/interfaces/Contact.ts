// src/interfaces/Contact.ts
export interface Contact {
    id: number;
    firstname: string;
    lastname: string;
    status: "ACTIVE" | "INACTIVE";
  }
  export interface ContactState{
    Contacts :Contact[]
  }


