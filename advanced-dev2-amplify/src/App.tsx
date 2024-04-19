import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider, Authenticator } from "@aws-amplify/ui-react";
import { redirect } from "next/navigation";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Routes
import Guest from "./pages/Guest";
import Admin from "./pages/Admin";
import Categories from "./pages/Guest";

// Config Amplify
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
Amplify.configure(config, { ssr: true });

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Guest />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
