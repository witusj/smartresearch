import { NextApiRequest, NextApiResponse } from 'next'

export let getData = async (cid) => {
  let url = `https://api.zotero.org/groups/2930755/collections/${cid}/items`
    const response = await fetch(url)
    const json = await response.json()
  return json
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let cid = req.query.cid
  console.log(cid)
    const items = await getData(cid)
    res.status(200).json({ items })
}

