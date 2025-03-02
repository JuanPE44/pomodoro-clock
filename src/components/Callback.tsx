import React, { useEffect } from "react";

interface CallbackProps {
  setToken: (token: string) => void;
}

const Callback: React.FC<CallbackProps> = ({ setToken }) => {
  useEffect(() => {
    const hash = window.location.hash;
    const token = new URLSearchParams(hash.substring(1)).get("access_token");
    if (token) {
      setToken(token);
      localStorage.setItem("spotify_token", token);
      window.location.href = "/";
    }
  }, [setToken]);

  return <div>Autenticando...</div>;
};

export default Callback;
