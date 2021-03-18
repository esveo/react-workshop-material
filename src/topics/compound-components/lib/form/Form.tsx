import { ComponentProps, createContext, ReactNode, useContext } from "react";
import { Button } from "../base-components/Button";
import "./Form.css";

export type FormContext<TFormData extends Record<any, any>> = {
  formData: TFormData;
  updateField: <TKey extends keyof TFormData>(
    key: TKey,
    value: TFormData[TKey]
  ) => void;
  reset: () => void;
};

const FormContext = createContext<FormContext<any> | null>(null);

function useFormContext() {
  const context = useContext(FormContext);

  if (!context) throw new Error("Only allowed below a FormController");

  return context;
}

export function FormController<TFormData extends Record<any, any>>(props: {
  formData: TFormData;
  updateFormData: (newFormData: TFormData) => void;
  onSubmit: () => void;
  onReset: () => void;
  children: ReactNode;
  className: string;
}) {
  const contextValue: FormContext<TFormData> = {
    formData: props.formData,
    updateField: (key, value) =>
      props.updateFormData({ ...props.formData, [key]: value }),
    reset: props.onReset,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        className={props.className}
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();
        }}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  );
}

export function FormSubmitButton(props: ComponentProps<typeof Button>) {
  return <Button {...props} type="submit" />;
}

export function FormResetButton(props: ComponentProps<typeof Button>) {
  const context = useFormContext();
  return <Button {...props} type="button" onClick={() => context.reset()} />;
}

export function FormTextField(props: {
  labelContent: ReactNode;
  fieldKey: string;
}) {
  const formContext = useFormContext();
  return (
    <div className="form--field-wrapper">
      <label htmlFor={props.fieldKey}>Name</label>
      <input
        type="text"
        id={props.fieldKey}
        value={formContext.formData[props.fieldKey]}
        onChange={(e) =>
          formContext.updateField(props.fieldKey, e.target.value)
        }
      />
    </div>
  );
}
