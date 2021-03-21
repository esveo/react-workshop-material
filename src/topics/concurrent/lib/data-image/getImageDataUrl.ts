/**
 * Download an image, and return the image data as a base64 data uri.
 */
export async function getImageDataUrl(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      canvas.getContext("2d")!.drawImage(img, 0, 0);

      const dataUrl = canvas.toDataURL("image/png");

      setTimeout(() => {
        resolve(dataUrl);
      }, 1000);
    };

    img.onerror = (err) => reject(err);

    // Trigger loading by setting the src attribute
    img.src = src;
  });
}
