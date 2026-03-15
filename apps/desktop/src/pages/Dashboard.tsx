import { useVPNStore } from "../store/vpnStore";

export default function Dashboard() {
  const { connected, setConnected } = useVPNStore();

  const handleConnect = async () => {
    try {
      if (!connected) {
        await window.vpn.connect();
        setConnected(true);
      } else {
        await window.vpn.disconnect();
        setConnected(false);
      }
    } catch (error) {
      console.error("VPN action failed:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>

      <p>Status: {connected ? "Connected" : "Disconnected"}</p>

      <button
        className="mt-4 px-6 py-3 bg-green-600 rounded-lg"
        onClick={handleConnect}
      >
        {connected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}