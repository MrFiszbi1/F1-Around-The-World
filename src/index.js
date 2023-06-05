import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import { RegionProvider } from "./hooks/RegionProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ProSidebarProvider>
        <RegionProvider>
          <App />
        </RegionProvider>
      </ProSidebarProvider>
    </BrowserRouter>
  </StrictMode>
);
