import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  BarChart3, Bell, ChevronDown, ChevronLeft, LayoutDashboard,
  Menu, Package, Search, Settings, ShoppingCart, Users, UserRound, X
} from "lucide-react";

const nav = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "User Manage", to: "/users", icon: Users },
  { label: "Customer Manage", to: "/customers", icon: UserRound },
  { label: "Products", to: "/products", icon: Package },
  { label: "Sale", to: "/sales", icon: ShoppingCart },
  { label: "Report", to: "/reports", icon: BarChart3 },
];

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("spark_admin_auth");
    localStorage.removeItem("spark_admin_token");
    navigate("/login");
  };

  return (
    <div className={`app-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className={`sidebar ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">*</div>
          <span>Spark Admin</span>
          <button className="icon-btn mobile-close" onClick={() => setMobileOpen(false)}><X size={18}/></button>
        </div>

        <div className="nav-section-title">MENU</div>
        <nav className="nav-list">
          {nav.slice(0,1).map(({label,to,icon:Icon}) => (
            <NavLink key={to} to={to} end className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
              <Icon size={18}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="nav-section-title">COMPONENTS</div>
        <nav className="nav-list">
          {nav.slice(1).map(({label,to,icon:Icon}) => (
            <NavLink key={to} to={to} className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
              <Icon size={18}/><span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <NavLink to="/settings" className={({isActive}) => `nav-item ${isActive ? "active" : ""}`}>
            <Settings size={18}/><span>Settings</span>
          </NavLink>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="topbar-left">
            <button className="icon-btn mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={19}/></button>
            <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
              <ChevronLeft size={18} className={collapsed ? "rotate-180" : ""}/>
            </button>
            <button className="create-btn">＋ Create</button>
          </div>

          <div className="search-box">
            <Search size={17}/>
            <input placeholder="Search anything in Spark..." />
          </div>

          <div className="topbar-right">
            <button className="icon-btn"><span className="notification-dot"></span><Bell size={18}/></button>
            <div className="profile">
              <div className="avatar">A</div>
              <div className="profile-copy"><b>Admin</b><small>Administrator</small></div>
              <ChevronDown size={15}/>
            </div>
            <button className="logout-link" onClick={logout}>Sign out</button>
          </div>
        </header>
        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
