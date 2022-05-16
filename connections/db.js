import { connect, connection } from "mongoose";

const singelton = {
    isConnected: false
}

export async function dbConnect() {
    if (singelton.isConnected) return;

    const db = await connect(process.env.MONGO_URL)
    singelton.isConnected = db.connection.readyState;
}

connection.on('connected', () => {
    console.log('Mongoose connected to');
})

connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
})
