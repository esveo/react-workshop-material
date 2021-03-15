import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./TopNav.css";

export function TopNav() {
  const [locale, setLocale] = useState("en");
  const [time, setTime] = useState(new Date().toLocaleTimeString(locale));

  /**
   * Intervalhandler needs to be cached, so that effects will not be triggered needlesly
   */
  const intervalHandler = useCallback(() => {
    setTime(new Date().toLocaleTimeString(locale));
  }, [locale]);

  /**
   * Use memo can be used to mimic useCallback
   */
  const intervalHandlerWithUseMemo = useMemo(
    () => () => {
      setTime(new Date().toLocaleTimeString(locale));
    },
    [locale]
  );

  /**
   * Instead of React.memo or React.PureComponent we can use useMemo to cache the JSX
   */
  const icon = useMemo(() => <BarIcon />, []);

  useInterval(intervalHandler, 1000);

  return (
    <nav className="top-nav">
      <button aria-label="Application Menu" className="app-menu-button">
        {icon}
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

function useInterval(callback: () => void, delay: number): void {
  useEffect(() => {
    console.log("run effect");
    const interval = setInterval(() => {
      callback();
    }, delay);

    return function cleanup() {
      console.log("cleanup effect");
      clearInterval(interval);
    };
  }, [callback, delay]);
}

function getTimeString() {
  return new Date().toLocaleTimeString();
}

function BarIcon() {
  console.log("render!");
  return <FontAwesomeIcon icon={faBars} />;
}
