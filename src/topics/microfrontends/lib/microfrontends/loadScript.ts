const loadedScripts = new Map<string, Promise<HTMLScriptElement>>();

export async function loadScript(src: string) {
  if (!loadedScripts.has(src)) {
    loadedScripts.set(
      src,
      new Promise<HTMLScriptElement>((resolve, reject) => {
        const element = document.createElement("script");

        element.src = src;
        element.type = "text/javascript";
        element.async = true;

        element.onload = () => {
          resolve(element);
        };

        element.onerror = (error) => {
          reject(error);
          loadedScripts.delete(src);
        };

        document.head.appendChild(element);
      })
    );
  }

  return await loadedScripts.get(src);
}
