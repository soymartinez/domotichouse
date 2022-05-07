import Head from 'next/head'
import Navbar from '../components/Navbar';

export default function Aire() {
    return (
        <div className='container'>
            <Head>
                <title>aire</title>
                <meta name="aire" content="aire" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <main className='main'>
                <h1 className='text-center text-3xl font-bold'>
                    Contenido de aire
                </h1>
            </main>
        </div>
    );
}
