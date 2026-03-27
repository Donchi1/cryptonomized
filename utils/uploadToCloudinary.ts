export const uploadToCloudinary = async (file: File | Blob | null | Uint8Array | ArrayBuffer): Promise<{ url: string; public_id: string } | null> => {
  if (!file) return null;

  const blob = new Blob([file as BlobPart]);
  
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async () => {
      try {
        const base64data = reader.result;
        const res = await fetch('/api/cloudinary/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64data })
        });
        
        if (!res.ok) {
          throw new Error('Upload failed');
        }
        
        const data = await res.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(err);
  });
};
