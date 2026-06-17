import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

if (import.meta.env.PROD && typeof document !== "undefined") {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.setAttribute("data-website-id", import.meta.env.VITE_UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
}

if (typeof document !== "undefined") {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

export async function prerender(_data: { url: string }) {
  const { renderToString } = await import("react-dom/server");

  return {
    html: renderToString(
      <StrictMode>
        <App />
      </StrictMode>,
    ),
  };
}
