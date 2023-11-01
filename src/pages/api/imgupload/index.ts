// eslint-disable-next-line import/no-extraneous-dependencies
import S3 from 'aws-sdk/clients/s3';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const s3 = new S3({
    apiVersion: '2006-03-01',
  });
  const post = await s3.createPresignedPost({
    Bucket: process.env.S3_BUCKET_NAME,
    Fields: {
      key: req.query.file,
      'Content-Type': req.query.fileType,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 1048576], // up to 1 MB
    ],
  });
  const imgUrl = `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${req.query.file}`;

  res.status(200).json({
    ...post,
    imgUrl,
  });
}
