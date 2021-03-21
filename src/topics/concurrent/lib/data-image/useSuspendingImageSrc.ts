import { getImageDataUrl } from "./getImageDataUrl";

const imageCache = new Map<
  string,
  { loadingPromise: Promise<string>; dataUrl: string | null }
>();

export function useSuspendingImageSrc(src: string): string {
  let cachedValue = imageCache.get(src);

  if (!cachedValue) {
    const loadingPromise = getImageDataUrl(src);
    imageCache.set(src, {
      dataUrl: null,
      loadingPromise,
    });

    loadingPromise.then((dataUrl) => {
      imageCache.set(src, { dataUrl, loadingPromise });
    });

    cachedValue = imageCache.get(src)!;
  }

  if (cachedValue.dataUrl) return cachedValue.dataUrl;

  throw cachedValue.loadingPromise;
}
