import { useEffect, useMemo, useState } from "react";
import { Button } from "../base-components/Button";
import {
  FormController,
  FormResetButton,
  FormSubmitButton,
  FormTextField,
} from "../form/Form";
import { Satellite, SatelliteCreateInput, SatelliteType } from "./satelliteApi";
import "./SatelliteForm.css";

const defaultFormState = {
  name: "",
  reverse: false,
  angle: 0,
  type: "communication" as Satellite["type"],
};

type Props = {
  onSave: (
    newSatellite: SatelliteCreateInput | Satellite
  ) => Promise<void> | void;
  onDelete: (satelliteToDelete: Satellite) => Promise<void> | void;
  satellite?: Satellite | null;
};

export function SatelliteForm(props: Props) {
  const [formState, setFormState] = useState(
    props.satellite ?? defaultFormState
  );

  function handleSubmit() {
    props.onSave(formState);
  }

  const handleReset = useMemo(
    () =>
      function handleReset() {
        setFormState(props.satellite || defaultFormState);
      },
    [props.satellite]
  );

  function handleDelete() {
    if (!props.satellite) return;
    props.onDelete(props.satellite);
  }

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  return (
    <FormController
      className="satellite-form"
      onSubmit={handleSubmit}
      formData={formState}
      onReset={handleReset}
      updateFormData={setFormState}
    >
      <h1>Id: {props.satellite ? props.satellite.id : "<new>"}</h1>
      <FormTextField fieldKey="name" labelContent="Name" />
      <div className="form--field-wrapper">
        <label htmlFor="reverse">Reverse</label>
        <label>
          <input
            type="checkbox"
            id="reverse"
            checked={formState.reverse}
            onChange={(e) =>
              setFormState({ ...formState, reverse: e.target.checked })
            }
          />
          Fly counter-clockwise against earth's rotation.
        </label>
      </div>
      <div className="form--field-wrapper">
        <label htmlFor="angle">Angle</label>
        <input
          type="range"
          min="0"
          step="1"
          max="360"
          id="angle"
          value={formState.angle}
          onChange={(e) =>
            setFormState({ ...formState, angle: Number(e.target.value) })
          }
        />
      </div>
      <div className="form--field-wrapper">
        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={formState.type}
          onChange={(e) =>
            setFormState({
              ...formState,
              type: e.target.value as SatelliteType,
            })
          }
        >
          <option value="communication">Communication</option>
          <option value="military">Military</option>
          <option value="science">Science</option>
        </select>
      </div>

      <div className="satellite-form--actions">
        <FormSubmitButton
          disabled={!formState.name || formState.name.trim().length === 0}
        >
          Save
        </FormSubmitButton>
        <FormResetButton>Reset</FormResetButton>
        <Button disabled={!props.satellite} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </FormController>
  );
}
