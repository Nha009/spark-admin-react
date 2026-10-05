import React from "react";
import { FileBarChart2, Download } from "lucide-react";
import { PageHeader } from "./_pageParts";
export default function Reports() {
  return <><PageHeader title="Reports" subtitle="Generate business reports from your backend data." />
    <div className="report-grid">
      {["Sales Report","Inventory Report","Customer Report","Revenue Report"].map((r,i)=>
        <div className="report-card" key={r}><div className="report-icon"><FileBarChart2 size={22}/></div><h3>{r}</h3><p>Ready for API-powered report generation.</p><button className="outline-btn"><Download size={15}/> Export</button></div>
      )}
    </div></>;
}
