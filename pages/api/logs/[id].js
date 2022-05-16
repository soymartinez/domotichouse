import Log from "connections/models/log"

export default async (req, res) => {

    const { method, query: { id } } = req

    switch (method) {
        case 'GET':
            try {
                const logs = await Log.findById(id)
                if (!logs) return res.status(404).json({ error: "Log not found" })
                return res.status(200).json(logs)
            } catch (error) {
                return res.status(500).json({ error: error.message })
            }

        case 'DELETE':
            try {
                const deletedLog = await Log.findByIdAndDelete(id)
                if (!deletedLog) return res.status(404).json({ error: "Log not found" })
                return res.status(204).json(deletedLog)
            }
            catch (error) {
                return res.status(500).json({ error: error.message })
            }

        default:
            return res.status(405).json({
                message: 'Method not allowed'
            });
    }
}