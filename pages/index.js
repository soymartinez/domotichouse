import Layout from "components/layout";
import { connBroker } from "connections/mqtt";

export default function Home() {
  const [statusT, temp] = connBroker('domotic/temperatura');
  const [statusA, aire] = connBroker('domotic/aire');
  const [statusH, humedad] = connBroker('domotic/humedad');

  return (
    <Layout title={'Home'}>
      {
        statusT && statusA && statusH ?
          <div className='grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-flow-col text-2xl sm:text-3xl gap-2 lg:gap-4 w-full'>
            <div className='p-8 row-span-2 col-span-2 md:col-span-1 gap-8 lg:gap-4 from-neutral-100 bg-gradient-to-t md:bg-gradient-to-tl lg:bg-gradient-to-l flex lg:justify-start justify-center rounded-lg'>
              <div className={`w-8 h-64 rounded-2xl border-[1px] border-neutral-200`}>
                <div className={`h-1/3 ${temp[1] > 30 ? 'bg-gradient-to-t from-orange-500 to-red-500' : ''} rounded-t-2xl`}></div>
                <div className={`h-1/3 ${temp[1] >= 20 ? 'bg-gradient-to-t from-orange-500' : ''}
                                       ${temp[1] > 30 ? 'bg-gradient-to-b from-orange-500 to-orange-500' : ''}`}></div>
                <div className={`h-1/3 ${temp[1] < 20 ? 'bg-gradient-to-t from-blue-500 transition-colors duration-300' : ''} rounded-b-2xl
                                       ${temp[1] >= 20 ? 'bg-gradient-to-t from-blue-500 to-orange-500' : ''}`}></div>
              </div>
              <div className='grid place-content-center'>
                <h1 className='text-center font-bold text-3xl'>
                  Temperatura
                </h1>
                <h2 className='text-center text-neutral-400 font-bold text-3xl'>{temp[1]} °C</h2>
              </div>
            </div>
            <div className='p-4 bg-neutral-100 grid place-content-center rounded-lg'>
              <h1 className='text-center font-bold'>
                Aire
              </h1>
              <h2 className='text-center text-neutral-400 font-bold'>{aire[1]}%</h2>
            </div>
            <button className='p-4 text-center font-bold md:row-start-3 lg:row-start-2 lg:col-end-3 md:col-end-2 col-span-1 bg-neutral-100 grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-200'
              onClick={apagarTodo} >
              Apagar Todo
            </button>
            <div className='p-4 col-span-1 bg-neutral-100 grid place-content-center rounded-lg'>
              <h1 className='text-center font-bold'>
                Humedad
              </h1>
              <h2 className='text-center text-neutral-400 font-bold'>{humedad[1]}%</h2>
            </div>
            <div className='p-4 text-center font-bold col-span-1 bg-neutral-100 grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-200'
              onClick={encenderTodo}>
              Encender Todo
            </div>
          </div>
          : <div className='text-center text-3xl font-bold text-neutral-400'>
            <i className='bx bx-loader bx-spin mr-2'></i>
            Cargando...
          </div>
      }
    </Layout>
  )
}

function apagarTodo() {
  console.log('Apagando todo')
}

function encenderTodo() {
  console.log('Encendiendo todo')
}
