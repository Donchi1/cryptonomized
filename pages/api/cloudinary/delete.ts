import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getPublicIdFromUrl = (url: string) => {
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  const publicIdWithExt = parts.slice(parts.indexOf('upload') + 2).join('/');
  return publicIdWithExt.split('.')[0];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    let { public_id, url } = req.body;

    if (!public_id && url) {
      public_id = getPublicIdFromUrl(url);
    }

    if (!public_id) {
      return res.status(400).json({ message: 'Public ID or URL is required' });
    }

    const deleteResponse = await cloudinary.uploader.destroy(public_id);

    return res.status(200).json({
      message: 'Image deleted successfully',
      result: deleteResponse.result,
    });
  } catch (error: any) {
    console.error('Cloudinary delete error:', error);
    return res.status(500).json({ message: 'Error deleting image', error: error.message });
  }
}
