import { GenericList } from "../base-components/GenericList";
import { Satellite } from "./satelliteApi";
import "./SatelliteSelect.css";

type Props = {
  onChange: (newId: string | null) => void;
  selectedSatelliteId: string | null;
  satellites: Satellite[];
};

export function SatelliteSelect(props: Props) {
  function onSatelliteClick(satellite: Satellite) {
    props.onChange(satellite.id);
  }

  return (
    <GenericList
      className="satellite-select-list"
      items={props.satellites}
      getItemClassName={(s) =>
        s.id === props.selectedSatelliteId ? "__selected" : ""
      }
      onItemClick={onSatelliteClick}
      renderItem={(s) => s.name}
      getItemKey={(s) => s.id}
    />
  );
}
