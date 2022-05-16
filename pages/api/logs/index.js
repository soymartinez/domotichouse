import { dbConnect } from 'connections/db'
import Log from 'connections/models/log'

dbConnect()

export default async function handler(req, res) {

  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const logs = await Log.find()
        return res.status(200).json(logs)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
        
    case 'POST':
      try {
        const newLog = await Log.create(body)
        return res.status(201).json(newLog)
      }
      catch (error) {
        return res.status(500).json({ error: error.message })
      }
      
    case 'DELETE':
      const deleteLog = await Log.deleteMany()
      return res.status(200).json(deleteLog)
    case 'PUT':
      const updateLog = await Log.updateMany(body)
      return res.status(200).json(updateLog)
    case 'PATCH':
      const patchLog = await Log.updateMany(body)
      return res.status(200).json(patchLog)
    default:
      return res.status(405).json({
        message: 'Method not allowed'
      });
  }
}
