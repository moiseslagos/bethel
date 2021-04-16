import { dataFrequencies } from 'data/frequencies'

export default function handler (req, res) {
  res.status(200).json(dataFrequencies)
}
