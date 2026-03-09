import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-6">VPN Login</h2>

      <button
        className="bg-blue-600 px-6 py-2 rounded"
        onClick={() => navigate("/dashboard")}
      >
        Login
      </button>
    </div>
  );
}