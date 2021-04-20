
import content from './video.json'

export default function (req, res) {
  res.status(200).json({ content })
}