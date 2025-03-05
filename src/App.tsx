import { NavBar } from "./components/ui/NavBar";
import useSpotifyAuth from "./hooks/useSpotifyAuth";
import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { logout, token, setToken } = useSpotifyAuth();
  return (
    <div className="min-h-screen flex bg-red-500 ">
      <NavBar />
      <BrowserRouter>
        <AppRoutes logout={logout} token={token} setToken={setToken} />
      </BrowserRouter>
    </div>
  );
}

export default App;
