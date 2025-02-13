import type { Schema, Struct } from "@strapi/strapi";

export interface TicketsContact extends Struct.ComponentSchema {
  collectionName: "components_tickets_contacts";
  info: {
    displayName: "contact";
  };
  attributes: {
    email: Schema.Attribute.Email;
    extension: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "tickets.contact": TicketsContact;
    }
  }
}
