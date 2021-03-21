import React, { ComponentType } from "react";
import { loadRemoteModule, RemoteModuleConfig } from "./loadRemoteModule";

type RemoteComponentConfing = RemoteModuleConfig & {
  /**
   * The name of the export where the component can be found in the module
   * Defaults to "default".
   */
  exportedName: string;
};

export function createRemoteComponent<TComponent extends ComponentType<any>>(
  config: RemoteComponentConfing
) {
  const Component = React.lazy(() =>
    loadRemoteModule(config).then((mod) => ({
      default: mod[config.exportedName] as TComponent,
    }))
  );
  return Component;
}
