import SatelliteVisualisation from "@esveo/satellite-visualisation";
import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./lib/base-components/Button";
import { ChatWidget } from "./lib/live-chat/ChatWidget";
import {
  createSatellite,
  deleteSatellite,
  getSatellites,
  Satellite,
  SatelliteCreateInput,
  updateSatellite,
} from "./lib/satellites/satelliteApi";
import { SatelliteForm } from "./lib/satellites/SatelliteForm";
import { SatelliteSelect } from "./lib/satellites/SatelliteSelect";
import { TopNav } from "./TopNav";

type DataLoadingState<TResult> =
  | { type: "LOADING"; data?: null; error?: null }
  | { type: "SUCCESS"; data: TResult; error?: null }
  | { type: "ERROR"; data?: null; error: Error };

export function App() {
  const [satelliteLoadingState, setSatelliteLoadingState] = useState<
    DataLoadingState<Satellite[]>
  >({ type: "LOADING" });
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<string | null>(
    null
  );

  useEffect(() => {
    let cancelled = false;
    setSatelliteLoadingState({ type: "LOADING" });
    getSatellites()
      .then((satellites) => {
        if (!cancelled)
          setSatelliteLoadingState({ type: "SUCCESS", data: satellites });
      })
      .catch((err) => {
        if (!cancelled) setSatelliteLoadingState({ type: "ERROR", error: err });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedSatellite = satelliteLoadingState.data?.find(
    (s) => s.id === selectedSatelliteId
  );

  async function handleSave(satellite: Satellite | SatelliteCreateInput) {
    if (!("id" in satellite)) {
      const created = await createSatellite(satellite);
      if (satelliteLoadingState.type === "SUCCESS") {
        setSatelliteLoadingState({
          ...satelliteLoadingState,
          data: [...satelliteLoadingState.data, created],
        });
      }
      return;
    }
    const updated = await updateSatellite(satellite);
    if (satelliteLoadingState.type === "SUCCESS") {
      setSatelliteLoadingState({
        ...satelliteLoadingState,
        data: satelliteLoadingState.data.map((s) =>
          s.id === selectedSatelliteId ? updated : s
        ),
      });
    }
  }

  function handleDelete(satellite: Satellite) {
    deleteSatellite(satellite);
    if (satelliteLoadingState.type === "SUCCESS") {
      setSatelliteLoadingState({
        ...satelliteLoadingState,
        data: satelliteLoadingState.data.filter((s) => s.id !== satellite.id),
      });
    }
  }

  return (
    <div className="satellite-control-app">
      <TopNav></TopNav>
      <div className="satellite-main">
        <div className="satellite-select">
          {satelliteLoadingState.type === "LOADING" && <span>Loading</span>}
          {satelliteLoadingState.type === "ERROR" && (
            <span>Error: {satelliteLoadingState.error.message}</span>
          )}
          {satelliteLoadingState.type === "SUCCESS" && (
            <SatelliteSelect
              selectedSatelliteId={selectedSatelliteId}
              onChange={setSelectedSatelliteId}
              satellites={satelliteLoadingState.data}
            />
          )}
          <Button onClick={() => setSelectedSatelliteId(null)}>
            Create new
          </Button>
        </div>
        <div className="satellite-details">
          <SatelliteForm
            onSave={handleSave}
            satellite={selectedSatellite}
            onDelete={handleDelete}
          />
        </div>
        <div className="satellite-visualisation">
          <SatelliteVisualisation
            satellites={satelliteLoadingState.data ?? []}
            selectedSatelliteId={selectedSatelliteId}
          />
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}
