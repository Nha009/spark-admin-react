import React from "react";
import { PageHeader, EmptyTable } from "./_pageParts";
export default function Customers() {
  return <><PageHeader title="Customer Management" subtitle="Manage customer profiles and contact information." button="New Customer"/>
    <EmptyTable columns={["Customer ID","First Name","Last Name","Email","Phone","Created Date","Actions"]} title="No customers yet" /></>;
}
