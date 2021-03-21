import { loadScript } from "./loadScript";

export type RemoteModuleConfig = {
  /**
   * The url where the bundled JavaScript is hosted
   */
  url: string;

  /**
   * Name of the library as specified in the `library` field
   * of the WebpackModuleFederationPlugin in the webpack config of the remote module
   */
  libraryName: string;

  /**
   * Name of the specific module as specified in the `exposes` field of the remote module
   */
  moduleName: string;
};

export async function loadRemoteModule(config: RemoteModuleConfig) {
  // First we need to load
  await loadScript(config.url);

  const moduleScope = window as any;

  // Initializes the shared scope. Fills it with known provided modules from this build and all remotes
  // @ts-expect-error Webpack internals
  await __webpack_init_sharing__("default");

  const container = moduleScope[config.libraryName];

  // @ts-expect-error Webpack internals
  await container.init(__webpack_share_scopes__.default);

  const factory = await moduleScope[config.libraryName].get(config.moduleName);

  const Module = factory();

  return Module;
}
