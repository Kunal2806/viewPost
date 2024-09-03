import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ViewPost from "./ViewPost";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ViewPost />
    </Router>
  </StrictMode>
);
