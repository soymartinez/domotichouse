import Layout from 'components/layout';
import { connBroker } from 'connections/mqtt';

export default function Humedad() {
    const [status, payload] = connBroker('domotic/humedad');
    return (
        <Layout title={'Humedad'}>
            {
                status ?
                    <div className='text-center text-3xl font-bold text-red-500'>
                        🚀 Conectado
                        <section className='p-4'>
                            <h1 className='text-yellow-500'>
                                Topic: {payload[0]}
                            </h1>
                            <h1 className='text-blue-500'>
                                Humedad: {payload[1]}
                            </h1>
                        </section>
                    </div>
                    : <div className='text-center text-3xl font-bold text-neutral-400'>
                        <i className='bx bx-loader bx-spin mr-2'></i>
                        Cargando...
                    </div>
            }
        </Layout>
    );
}
