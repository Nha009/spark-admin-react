import React from "react";
import { PageHeader } from "./_pageParts";
export default function Settings() {
  return <><PageHeader title="Settings" subtitle="Configure application preferences and API connectivity." />
    <div className="settings-card">
      <h2>API Configuration</h2>
      <p className="muted">The frontend reads the backend URL from <code>VITE_API_URL</code>.</p>
      <div className="setting-row"><span><b>Backend status</b><small>Connect your Express API at /api</small></span><span className="status-badge">READY</span></div>
      <div className="setting-row"><span><b>Authentication</b><small>Bearer token interceptor is configured</small></span><span className="status-badge">READY</span></div>
    </div></>;
}
