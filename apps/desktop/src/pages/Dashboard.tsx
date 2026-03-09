import { useVPNStore } from "../store/vpnStore";

export default function Dashboard() {
  const { connected, setConnected } = useVPNStore();

  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <p>Status: {connected ? "Connected" : "Disconnected"}</p>
      <button
        className="mt-4 px-4 py-2 bg-green-600 rounded"
        onClick={() => setConnected(!connected)}
      >
        {connected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
