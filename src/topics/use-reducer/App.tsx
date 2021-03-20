import SatelliteVisualisation from "@esveo/satellite-visualisation";
import { useEffect, useReducer, useState } from "react";
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
import { satelliteReducer } from "./lib/satellites/satellitesReducer";
import { TopNav } from "./TopNav";

export function App() {
  const [satelliteState, dispatch] = useReducer(satelliteReducer, {
    satellites: [],
  });
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<string | null>(
    null
  );

  const satellites = satelliteState.satellites;

  useEffect(() => {
    getSatellites().then((satellites) =>
      dispatch({ type: "SATELLITES_LOADED", satellites })
    );
  }, []);

  const selectedSatellite = satellites?.find(
    (s) => s.id === selectedSatelliteId
  );

  async function handleSave(satellite: Satellite | SatelliteCreateInput) {
    if (!("id" in satellite)) {
      const created = await createSatellite(satellite);
      dispatch({ type: "SATELLITE_CREATED", satellite: created });
      return;
    }
    const updated = await updateSatellite(satellite);
    dispatch({ type: "SATELLITE_UPDATED", satellite: updated });
  }

  function handleDelete(satellite: Satellite) {
    deleteSatellite(satellite);
    dispatch({ type: "SATELLITE_DELETED", satellite });
  }

  return (
    <div className="satellite-control-app">
      <TopNav></TopNav>
      <div className="satellite-main">
        <div className="satellite-select">
          <SatelliteSelect
            selectedSatelliteId={selectedSatelliteId}
            onChange={setSelectedSatelliteId}
            satellites={satellites ?? []}
          />
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
            satellites={satellites ?? []}
            selectedSatelliteId={selectedSatelliteId}
          />
        </div>
      </div>
      <ChatWidget />
    </div>
  );
}
