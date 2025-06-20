export type ContactData = {
  id: string;
  name: string;
  number: string;
};

export type ContactCreateData = Omit<ContactData, "id">;

export type EditContactData = {
  id: string;
  newContact: ContactCreateData;
};
