import React from "react";
import { PageHeader } from "./_pageParts";
import { ShoppingCart, Plus, Trash2 } from "lucide-react";

export default function Sales() {
  return <div>
    <PageHeader title="Sales" subtitle="Create invoices and manage sales transactions." />
    <section className="sale-card">
      <div className="section-title"><h2>Customer Information</h2><span>Step 1</span></div>
      <div className="form-grid three">
        <div><label>Customer Name</label><input placeholder="Enter customer name"/></div>
        <div><label>Invoice Number</label><input placeholder="INV-001"/></div>
        <div><label>Sale Date</label><input type="date"/></div>
      </div>
      <div className="divider"></div>
      <div className="section-title"><h2>Product Information</h2><span>Step 2</span></div>
      <div className="form-grid four">
        <div><label>Select Product</label><select><option>Select Product</option></select></div>
        <div><label>Quantity</label><input type="number" placeholder="Quantity"/></div>
        <div><label>Unit Price ($)</label><input type="number" placeholder="Price"/></div>
        <div><label>Discount ($)</label><input type="number" placeholder="Discount"/></div>
      </div>
      <button className="secondary-btn"><Plus size={16}/> Add to List</button>
      <div className="invoice-empty"><ShoppingCart size={30}/><b>Invoice items will appear here</b><span>Connect the sales API to save and calculate invoice lines.</span></div>
      <div className="sale-summary"><span>Subtotal <b>$0.00</b></span><span>Discount <b>$0.00</b></span><strong>Grand Total <b>$0.00</b></strong></div>
      <div className="form-actions"><button className="primary-btn">Save Sale</button><button className="ghost-btn">Clear</button><button className="outline-btn">Print Invoice</button></div>
    </section>
  </div>;
}
