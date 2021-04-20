
import content from './video.json'

export default (req, res) => {
  res.status(200).json({ content })
}