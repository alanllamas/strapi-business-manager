import type { Schema, Struct } from "@strapi/strapi";

export interface ClientsTaxingInfo extends Struct.ComponentSchema {
  collectionName: "components_clients_taxing_infos";
  info: {
    description: "";
    displayName: "taxing_info";
    icon: "";
  };
  attributes: {
    billing_period: Schema.Attribute.Integer;
    comments: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    invoice_period: Schema.Attribute.Integer;
    payment_method: Schema.Attribute.Enumeration<
      ["transferencia", "efectivo", "tarjeta"]
    > &
      Schema.Attribute.DefaultTo<"transferencia">;
    payment_period: Schema.Attribute.Integer;
    shipping_invoice: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    tax_certificate: Schema.Attribute.Media<"files">;
    taxing_CFDI_use: Schema.Attribute.String;
    taxing_company_name: Schema.Attribute.String;
    taxing_method_of_payment: Schema.Attribute.String;
    taxing_payment_method: Schema.Attribute.String;
    taxing_regime: Schema.Attribute.String;
    taxing_RFC: Schema.Attribute.String;
    zip_code: Schema.Attribute.BigInteger;
  };
}

export interface PurchasesPurchaseSupply extends Struct.ComponentSchema {
  collectionName: "components_purchases_purchase_supplies";
  info: {
    displayName: "Purchase-supply";
  };
  attributes: {
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    quantity: Schema.Attribute.Decimal & Schema.Attribute.Required;
    supply: Schema.Attribute.Relation<"oneToOne", "api::supply.supply">;
    supply_total: Schema.Attribute.Decimal & Schema.Attribute.Required;
    supply_variants: Schema.Attribute.Relation<
      "oneToMany",
      "api::supply-variant.supply-variant"
    >;
  };
}

export interface TicketsContact extends Struct.ComponentSchema {
  collectionName: "components_tickets_contacts";
  info: {
    description: "";
    displayName: "contact";
  };
  attributes: {
    area: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    extension: Schema.Attribute.Integer;
    job_title: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.BigInteger;
  };
}

export interface TicketsTicketProduct extends Struct.ComponentSchema {
  collectionName: "components_tickets_ticket_products";
  info: {
    description: "";
    displayName: "ticket-product";
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<"oneToOne", "api::product.product">;
    product_total: Schema.Attribute.Decimal;
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
      "clients.taxing-info": ClientsTaxingInfo;
      "purchases.purchase-supply": PurchasesPurchaseSupply;
      "tickets.contact": TicketsContact;
      "tickets.ticket-product": TicketsTicketProduct;
    }
  }
}
