import React from "react";
import { PageHeader, EmptyTable } from "./_pageParts";
export default function Users() {
  return <><PageHeader title="User Management" subtitle="Manage admin accounts and permissions." button="New User"/>
    <EmptyTable columns={["ID","Username","Email","Role","Status","Created Date","Actions"]} title="No users yet" /></>;
}
