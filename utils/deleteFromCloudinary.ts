export const deleteFromCloudinary = async (url: string | undefined): Promise<void> => {
  if (!url) return;
  
  try {
    const res = await fetch('/api/cloudinary/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    
    if (!res.ok) {
      throw new Error('Delete failed');
    }
  } catch (err) {
    console.error('Failed to delete image from Cloudinary:', err);
  }
};
