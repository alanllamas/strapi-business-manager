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

export interface TicketsTicketProduct extends Struct.ComponentSchema {
  collectionName: "components_tickets_ticket_products";
  info: {
    displayName: "ticket-product";
  };
  attributes: {
    product: Schema.Attribute.Relation<"oneToOne", "api::product.product">;
    product_variants: Schema.Attribute.Relation<
      "oneToMany",
      "api::product-variant.product-variant"
    >;
    quantity: Schema.Attribute.Decimal;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "tickets.contact": TicketsContact;
      "tickets.ticket-product": TicketsTicketProduct;
    }
  }
}
