import Layout from 'components/layout';
import Table from 'components/table';

export default function Temperatura() {

    return (
        <Layout title={'Temperatura'}>
            <Table value={'temp'} sign={'°C'} />
        </Layout>
    );
}
