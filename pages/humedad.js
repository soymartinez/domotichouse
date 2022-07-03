import Layout from 'components/layout';
import Table from 'components/table';

export default function Humedad() {
    return (
        <Layout title={'Humedad'}>
            <Table value={'hum'} sign={'%'} />
        </Layout>
    );
}
