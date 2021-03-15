export type Satellite = {
  id: string;
  name: string;
  reverse: boolean;
  angle: number;
  type: SatelliteType;
};

export type SatelliteType = "communication" | "military" | "science";

export type SatelliteCreateInput = Omit<Satellite, "id">;
export type SatelliteDeleteInput = Pick<Satellite, "id">;

export async function getSatellites(): Promise<Satellite[]> {
  const serverResponse = await fetch("http://localhost:3002/satellites");
  return await serverResponse.json();
}

export async function createSatellite(
  newSatellite: SatelliteCreateInput
): Promise<Satellite> {
  const serverResponse = await fetch("http://localhost:3002/satellites", {
    method: "POST",
    body: JSON.stringify(newSatellite),
  });
  return await serverResponse.json();
}

export async function updateSatellite(
  updatedSatellite: Satellite
): Promise<Satellite> {
  const serverResponse = await fetch(
    "http://localhost:3002/satellites/" + updatedSatellite.id,
    {
      method: "PUT",
      body: JSON.stringify(updatedSatellite),
    }
  );
  return await serverResponse.json();
}

export async function deleteSatellite(
  updatedSatellite: SatelliteDeleteInput
): Promise<void> {
  await fetch("http://localhost:3002/satellites/" + updatedSatellite.id, {
    method: "DELETE",
  });
}
