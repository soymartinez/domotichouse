import Head from 'next/head'
import Navbar from '../components/Navbar';

export default function Temperatura() {
    return (
        <div className='container'>
            <Head>
                <title>temperatura</title>
                <meta name="temperatura" content="temperatura" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className='main'>
                <h1 className='text-center text-3xl font-bold'>
                    Contenido de temperatura
                </h1>
            </main>
        </div>
    );
}
