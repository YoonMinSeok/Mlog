import type { NextApiRequest, NextApiResponse } from 'next';

import { postType } from '@/src/types/postType';
import { postData } from '../../src/data/PostData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<postType[]>,
) {
  res.status(200).json(postData);
}
