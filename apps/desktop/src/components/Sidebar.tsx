import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-slate-800 p-4">
      <h1 className="text-xl font-bold mb-6">VPN Client</h1>
      <nav className="space-y-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}
