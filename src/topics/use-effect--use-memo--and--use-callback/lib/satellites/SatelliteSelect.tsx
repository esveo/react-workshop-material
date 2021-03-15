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
    <ul className="satellite-select-list">
      {props.satellites.map((s) => (
        <li
          key={s.id}
          className={props.selectedSatelliteId === s.id ? "__selected" : ""}
          onClick={() => onSatelliteClick(s)}
        >
          {s.name}
        </li>
      ))}
    </ul>
  );
}
