import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/ui/NavBar";
import { FocusSessionsProvider } from "./context/FocusSessionsProvider";
import useSpotifyAuth from "./hooks/useSpotifyAuth";
import AppRoutes from "./routes/routes";

function App() {
  const { logout, token, setToken } = useSpotifyAuth();
  return (
    <div className="flex min-h-screen">
      <BrowserRouter>
        <NavBar />
        <FocusSessionsProvider>
          <AppRoutes logout={logout} token={token} setToken={setToken} />
        </FocusSessionsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
