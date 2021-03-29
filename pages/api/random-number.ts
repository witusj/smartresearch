import { NextApiRequest, NextApiResponse } from 'next'

function getRandom() {
  return Math.random();
}

export default function (req: NextApiRequest, res: NextApiResponse) {

    console.log('REQUEST BODY', req.)
    res.json({ number: Math.floor(getRandom() * 10) })
}