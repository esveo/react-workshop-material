import { Satellite } from "./satelliteApi";
import { satelliteReducer, SatelliteReducerState } from "./satellitesReducer";

describe("satellitesReducer", () => {
  it("Should add satellite on SATELLITE_CREATED", () => {
    // arrange
    const initialState: SatelliteReducerState = { satellites: [] };
    const newSatellite: Satellite = {
      angle: 5,
      id: "123",
      name: "Test Satellite",
      reverse: false,
      type: "military",
    };

    // act
    const newState = satelliteReducer(initialState, {
      type: "SATELLITE_CREATED",
      satellite: newSatellite,
    });

    expect(newState.satellites).toHaveLength(1);
    expect(newState.satellites[0]).toBe(newSatellite);
  });

  it("Should throw an error for invalid actions", () => {
    // arrange
    const initialState: SatelliteReducerState = { satellites: [] };

    expect(() =>
      // @ts-expect-error Reducer should not accept invalid actions
      satelliteReducer(initialState, { type: "NON_EXISTENT" })
    ).toThrow();
  });
});
