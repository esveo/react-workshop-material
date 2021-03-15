declare module "@esveo/satellite-visualisation" {
  export interface SatelliteVisualisationProps {
    satellites: {
      angle: number;
      id: string;
      type: string;
    }[];
    selectedSatelliteId?: string | null;
  }

  function SatelliteVisualisation(
    props: SatelliteVisualisationProps
  ): JSX.Element | null;

  export default SatelliteVisualisation;
}
