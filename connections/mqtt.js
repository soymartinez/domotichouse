import mqtt from 'mqtt';
import { useState, useEffect } from 'react';

export function connBroker(topic) {
    const [status, setStatus] = useState(false);
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        const client = mqtt.connect('ws://broker.emqx.io:8083/mqtt');
        client.on('connect', () => {
            client.subscribe(topic, (err) => {
                setStatus(true)
                if (!err) { console.log(`Subscrito a ${topic}`); }
                else { console.log(`Error al subscribirse a ${topic}`); }
            });
        });
        client.on('message', (topic, message) => {
            setPayload(payload => [topic, message.toString()]);
        });
    }, []);

    return [status, payload];
}