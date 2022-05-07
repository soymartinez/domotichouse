import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>home</title>
        <meta name="home" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className='main'>
        <h1 className='text-center text-3xl font-bold'>
          Contenido de home
        </h1>
      </main>
    </div>
  )
}
