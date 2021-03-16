import { Satellite } from "./satelliteApi";

type SatelliteReducerAction =
  | {
      type: "SATELLITES_LOADED";
      satellites: Satellite[];
    }
  | {
      type: "SATELLITE_DELETED";
      satellite: Satellite;
    }
  | {
      type: "SATELLITE_UPDATED";
      satellite: Satellite;
    }
  | {
      type: "SATELLITE_CREATED";
      satellite: Satellite;
    };

type SatelliteReducerState = {
  satellites: Satellite[];
};

export function satelliteReducer(
  state: SatelliteReducerState,
  action: SatelliteReducerAction
): SatelliteReducerState {
  switch (action.type) {
    case "SATELLITES_LOADED":
      return { satellites: action.satellites };
    case "SATELLITE_CREATED":
      return { satellites: [...state.satellites, action.satellite] };
    case "SATELLITE_DELETED":
      return {
        satellites: state.satellites.filter(
          (s) => s.id !== action.satellite.id
        ),
      };
    case "SATELLITE_UPDATED":
      return {
        satellites: state.satellites.map((s) =>
          s.id === action.satellite.id ? action.satellite : s
        ),
      };
  }
}
