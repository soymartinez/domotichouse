import Head from 'next/head'
import Navbar from '../components/Navbar';

export default function Humedad() {
    return (
        <div className='container'>
            <Head>
                <title>humedad</title>
                <meta name="humedad" content="humedad" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className='main'>
                <h1 className='text-center text-3xl font-bold'>
                    Contenido de humedad
                </h1>
            </main>
        </div>
    );
}
