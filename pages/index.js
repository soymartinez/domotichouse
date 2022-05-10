import Layout from '../components/Layout'

const temp = 25

export default function Home() {
  return (
    <Layout title={'Home'}>
      <div className='grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-flow-col text-2xl sm:text-3xl gap-2 lg:gap-4 w-full'>
        <div className='p-8 row-span-2 col-span-2 md:col-span-1 gap-8 lg:gap-4 from-neutral-100 bg-gradient-to-t md:bg-gradient-to-tl lg:bg-gradient-to-l flex lg:justify-start justify-center rounded-lg'>
          <div className={`w-8 h-64 rounded-2xl border-[1px] border-neutral-200`}>
            <div className={`h-1/3 ${temp > 30 ? 'bg-gradient-to-t from-orange-500 to-red-500' : ''} rounded-t-2xl`}></div>
            <div className={`h-1/3 ${temp >= 20 ? 'bg-gradient-to-t from-orange-500' : ''}
                                   ${temp > 30 ? 'bg-gradient-to-b from-orange-500 to-orange-500' : ''}`}></div>
            <div className={`h-1/3 ${temp < 20 ? 'bg-gradient-to-t from-blue-500' : ''} rounded-b-2xl
                                   ${temp >= 20 ? 'bg-gradient-to-t from-blue-500 to-orange-500' : ''}`}></div>
          </div>
          <div className='grid place-content-center'>
            <h1 className='text-center font-bold'>
              Temperatura
            </h1>
            <h2 className='text-center text-neutral-400 font-bold'>{temp} °C</h2>
          </div>
        </div>
        <div className='p-4 bg-neutral-100 grid place-content-center rounded-lg'>
          <h1 className='text-center font-bold'>
            Aire
          </h1>
          <h2 className='text-center text-neutral-400 font-bold'>{45}%</h2>
        </div>
        <button className='p-4 text-center font-bold md:row-start-3 lg:row-start-2 lg:col-end-3 md:col-end-2 col-span-1 bg-neutral-100 grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-200'
          onClick={apagarTodo} >
          Apagar Todo
        </button>
        <div className='p-4 col-span-1 bg-neutral-100 grid place-content-center rounded-lg'>
          <h1 className='text-center font-bold'>
            Humedad
          </h1>
          <h2 className='text-center text-neutral-400 font-bold'>{25}%</h2>
        </div>
        <div className='p-4 text-center font-bold col-span-1 bg-neutral-100 grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-200'
          onClick={encenderTodo}>
          Encender Todo
        </div>
      </div>
    </Layout>
  )
}

function apagarTodo() {
  console.log('Apagando todo')
}

function encenderTodo() {
  console.log('Encendiendo todo')
}
