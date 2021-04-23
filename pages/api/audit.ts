
import {NextApiRequest, NextApiResponse} from 'next'
import content from './audit.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ content })
}