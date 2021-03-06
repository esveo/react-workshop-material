import SatelliteVisualisation from "@esveo/satellite-visualisation";
import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { Button } from "./lib/base-components/Button";
import type { ChatWidget } from "./lib/live-chat/ChatWidget";
import { createRemoteComponent } from "./lib/microfrontends/createRemoteComponent";
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
      <Suspense fallback={"Loading!"}>
        <LazyChatWidget username="Microfrontend!" />
      </Suspense>
    </div>
  );
}

const LazyChatWidget = createRemoteComponent<ChatWidget>({
  url: "/runtime-modules/chat/chat-widget.js",
  libraryName: "chat_widget",
  moduleName: "./ChatWidget",
  exportedName: "ChatWidget",
});
