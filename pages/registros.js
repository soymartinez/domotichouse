import Layout from "components/layout";

export default function Logs({ data }) {
    return (
        <Layout title={'Registros'}>
            <>
                <table className="table text-gray-400 border-separate space-y-6 md:text-lg text-sm">
                    <thead className="bg-neutral-100 text-gray-500">
                        <tr>
                            <th className="p-3 md:px-8 text-left">Fecha</th>
                            <th className="p-3 text-left">Topico</th>
                            <th className="p-3 md:px-8 text-left">Payload</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(({ _id, topic, message, createdAt, }) => (
                                <tr className="bg-neutral-100" key={_id}>
                                    <td className="p-3 md:px-8 text-neutral-400">
                                        {createdAt}
                                    </td>
                                    <td className="p-3 text-green-500 font-bold lg:w-80 md:w-60">
                                        {topic}
                                    </td>
                                    <td className="p-3 md:px-8 text-blue-500 font-bold text-center">
                                        {message}
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
                <style jsx>
                    {`
                        .table {
                            border-spacing: 0 15px;
                        }

                        i {
                            font-size: 1rem !important;
                        }

                        .table tr {
                            border-radius: 20px;
                        }

                        tr td:nth-child(n + 3),
                        tr th:nth-child(n + 3) {
                            border-radius: 0 0.625rem 0.625rem 0;
                        }

                        tr td:nth-child(1),
                        tr th:nth-child(1) {
                            border-radius: 0.625rem 0 0 0.625rem;
                        }
                        `}
                </style>
            </>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(process.env.API_URL);
    const data = await res.json();
    return {
        props: { data },
    }
}
