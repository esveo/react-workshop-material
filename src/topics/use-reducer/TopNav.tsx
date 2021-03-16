import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./TopNav.css";

export function TopNav() {
  const [locale, setLocale] = useState("en");
  const [time, setTime] = useState(new Date().toLocaleTimeString(locale));

  return (
    <nav className="top-nav">
      <button aria-label="Application Menu" className="app-menu-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1>Satellite Manager</h1>
      <div
        className="top-nav-clock"
        onClick={() => setLocale(locale === "en" ? "de" : "en")}
      >
        {time}
      </div>
    </nav>
  );
}
