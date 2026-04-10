import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./app.css";

// import Crew from './src/pages/Crew';

import About from "./pages/about.js";
import Committees from "./pages/committees.js";
import CommitteePage from "./components/committee_page.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="about" element={<About />} />
      <Route path="committees" element={<Committees />} />
      <Route
        path="committeepage"
        element={
          <CommitteePage
            title={"GIFT OF GIVING GALA"}
            bannerImgSrc="giftOfGivingGala.png"
            gallery={[
              { caption: "Title Here", imgSrc: "placeholder.png" },
              { caption: "Another Title", imgSrc: "placeholder.png" },
              { caption: "lowercase", imgSrc: "placeholder.png" },
              { caption: "UPPERCASE", imgSrc: "placeholder.png" },
              { caption: "Title Here", imgSrc: "placeholder.png" },
            ]}
          />
        }
      />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
