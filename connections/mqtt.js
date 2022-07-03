import mqtt from 'mqtt';
import { useState, useEffect } from 'react';

export function Subscriber(topic) {
    const [status, setStatus] = useState(false);
    const [payload, setPayload] = useState([]);

    useEffect(() => {
        const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
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

export function Publisher(topic, message) {
    useEffect(() => {
        const client = mqtt.connect('wss://broker.emqx.io:8084/mqtt');
        client.on('connect', () => {
            client.publish(topic, message, { qos: 1, retain: true }, (err) => {
                if (!err) { console.log(`Publicado a ${topic}`); }
                else { console.log(`Error al publicar a ${topic}`); }
            });
        });
    }, []);
}

export function Disconnect() {
    client.on('disconnect', () => {
        console.log('Desconectado');
    });
}
