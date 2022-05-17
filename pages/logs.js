import Layout from "components/layout";

export default function Logs({ data }) {
    return (
        <Layout title={'Logs'}>
            <div className="font-bold md:text-xl w-full">
                <div className="flex flex-col mt-2">
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-400 scrollbar-track-neutral-200 md:rounded-lg rounded-md">
                        <div className="inline-block min-w-full">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className='bg-neutral-100'>
                                        <tr>
                                            <th className="py-3 px-6 text-sm font-medium text-left text-neutral-500
                                                         uppercase tracking-wider">Date</th>
                                            <th className="py-3 px-6 text-sm font-medium text-left text-neutral-500
                                                         uppercase tracking-wider">Topic</th>
                                            <th className="py-3 px-6 text-sm font-medium text-left text-neutral-500
                                                         uppercase tracking-wider">Payload</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {
                                            data.map(({ _id, topic, message, createdAt }) => (
                                                <tr key={_id} className='border-b'>
                                                    <td className="text-neutral-400 py-4 px-6 whitespace-nowrap">{createdAt}</td>
                                                    <td className="text-green-500 py-4 px-6 whitespace-nowrap">{topic}</td>
                                                    <td className="text-blue-500 py-4 px-6 whitespace-nowrap flex justify-between">
                                                        <span className='pr-2'>
                                                            <span className='text-neutral-400'>temperatura:</span> {message.temperature}</span>
                                                        <span className='pr-2'>
                                                            <span className='text-neutral-400'>humedad:</span> {message.humidity}</span>
                                                        <span>
                                                            <span className='text-neutral-400'>aire:</span> {message.air}</span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
