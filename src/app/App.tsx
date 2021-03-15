import SatelliteVisualisation from "@esveo/satellite-visualisation";
import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./Button";
import {
  createSatellite,
  deleteSatellite,
  getSatellites,
  Satellite,
  SatelliteCreateInput,
  updateSatellite,
} from "./satelliteApi";
import { SatelliteForm } from "./SatelliteForm";
import { SatelliteSelect } from "./SatelliteSelect";

export function App() {
  const [satellites, setSatellites] = useState<Satellite[] | null>(null);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<string | null>(
    null
  );

  useEffect(() => {
    getSatellites().then((satellites) => setSatellites(satellites));
  }, []);

  const selectedSatellite = satellites?.find(
    (s) => s.id === selectedSatelliteId
  );

  async function handleSave(satellite: Satellite | SatelliteCreateInput) {
    if (!("id" in satellite)) {
      const created = await createSatellite(satellite);
      setSatellites((s) => [...(s ?? []), created]);
      return;
    }
    const updated = await updateSatellite(satellite);
    setSatellites((oldSatellites) =>
      (oldSatellites ?? []).map((s) =>
        s.id === selectedSatelliteId ? updated : s
      )
    );
  }

  function handleDelete(satellite: Satellite) {
    deleteSatellite(satellite);
    setSatellites((oldSatellites) =>
      (oldSatellites ?? []).filter((s) => s.id !== satellite.id)
    );
  }

  return (
    <div className="satellite-control-app">
      <div className="satellite-select">
        <SatelliteSelect
          selectedSatelliteId={selectedSatelliteId}
          onChange={setSelectedSatelliteId}
          satellites={satellites ?? []}
        />
        <Button onClick={() => setSelectedSatelliteId(null)}>Create new</Button>
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
  );
}
