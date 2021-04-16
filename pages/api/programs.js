import { programs } from 'data/programs'

export default function handler (req, res) {
  res.status(200).json(programs)
}
