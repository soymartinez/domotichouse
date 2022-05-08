import Head from 'next/head'
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
    return (
        <div className='container'>
            <Head>
                <title>{title}</title>
                <meta name={title} content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className='main'>
                {children}
            </main>
        </div>
    )
}
