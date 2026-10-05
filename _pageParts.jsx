import React from "react";
import { Plus, Search, Eye, Pencil, Trash2, Download, FileBarChart2 } from "lucide-react";

export function PageHeader({title, subtitle, button}) {
  return <div className="page-header">
    <div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
    {button && <button className="primary-btn small"><Plus size={16}/>{button}</button>}
  </div>;
}

export function EmptyTable({columns, title="No records yet", description="Connect your backend API to start displaying data."}) {
  return <div className="table-card">
    <div className="table-toolbar"><div className="toolbar-search"><Search size={16}/><input placeholder="Search..." /></div></div>
    <div className="table-scroll"><table><thead><tr>{columns.map(c=><th key={c}>{c}</th>)}</tr></thead>
    <tbody><tr><td colSpan={columns.length}><div className="empty-state"><div className="empty-icon">＋</div><h3>{title}</h3><p>{description}</p></div></td></tr></tbody></table></div>
  </div>;
}

export function Actions() {
  return <div className="actions"><button className="action-btn"><Eye size={15}/></button><button className="action-btn"><Pencil size={15}/></button><button className="action-btn danger"><Trash2 size={15}/></button></div>;
}
