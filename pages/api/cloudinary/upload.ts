import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ message: 'Image data is required' });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: 'wealthwise_users',
    });

    return res.status(200).json({
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id,
    });
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    return res.status(500).json({ message: 'Error uploading image', error: error.message });
  }
}
