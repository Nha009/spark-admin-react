import React from "react";
import { ArrowUpRight, Package, ShoppingCart, Users, DollarSign, TrendingUp } from "lucide-react";
import { PageHeader } from "./_pageParts";

const stats = [
  {label:"Total Products",value:"—",hint:"Waiting for API",icon:Package, cls:"blue"},
  {label:"Total Customers",value:"—",hint:"Waiting for API",icon:Users, cls:"green"},
  {label:"Total Orders",value:"—",hint:"Waiting for API",icon:ShoppingCart, cls:"amber"},
  {label:"Total Revenue",value:"$ —",hint:"Waiting for API",icon:DollarSign, cls:"red"},
];

export default function Dashboard() {
  return <div>
    <PageHeader title="Dashboard" subtitle="Overview of your business performance." />
    <div className="stats-grid">{stats.map(s => {
      const Icon=s.icon; return <div className={`stat-card ${s.cls}`} key={s.label}>
        <div className="stat-top"><span>{s.label}</span><Icon size={19}/></div>
        <div className="stat-value">{s.value}</div>
        <div className="stat-hint">{s.hint}</div>
      </div>
    })}</div>

    <div className="dashboard-grid">
      <section className="panel chart-panel">
        <div className="panel-head"><div><h2>Sales Overview</h2><p>Connect `/dashboard/summary` to populate this chart.</p></div><button className="ghost-btn">This Month <ArrowUpRight size={15}/></button></div>
        <div className="chart-placeholder">
          <div className="chart-line"></div>
          <div className="chart-axis"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head"><div><h2>Quick Actions</h2><p>Common admin tasks.</p></div></div>
        <div className="quick-actions">
          <a href="/products"><Package/><span><b>Add Product</b><small>Create inventory item</small></span></a>
          <a href="/users"><Users/><span><b>Add User</b><small>Create system account</small></span></a>
          <a href="/sales"><ShoppingCart/><span><b>Create Sale</b><small>Start a new invoice</small></span></a>
        </div>
      </section>
    </div>

    <section className="panel recent-panel">
      <div className="panel-head"><div><h2>Recent Activity</h2><p>Your backend data will appear here.</p></div><TrendingUp size={20}/></div>
      <div className="empty-state compact"><div className="empty-icon">✓</div><h3>Ready for integration</h3><p>No demo records are stored in this starter project.</p></div>
    </section>
  </div>;
}
