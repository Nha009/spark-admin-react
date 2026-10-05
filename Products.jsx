import React from "react";
import { PageHeader, EmptyTable } from "./_pageParts";
export default function Products() {
  return <><PageHeader title="Products" subtitle="Manage inventory, pricing and stock status." button="New Product"/>
    <EmptyTable columns={["Product ID","Code","Title","Qty in Stock","Price","Status","Actions"]} title="No products yet" /></>;
}
