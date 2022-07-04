import Link from "next/link";
import Layout from "components/layout";
import { Subscriber } from "connections/mqtt";
import { BiLoaderAlt } from "react-icons/bi";

export default function Home() {
  const [statusT, temp] = Subscriber('domotic/temperatura');
  const [statusA, aire] = Subscriber('domotic/aire');
  const [statusH, humedad] = Subscriber('domotic/humedad');

  return (
    <Layout title={'Home'}>
      {
        <div className='grid grid-rows-4 md:grid-rows-3 lg:grid-rows-2 grid-flow-col text-2xl sm:text-3xl gap-2 lg:gap-4 w-full'>
          <Link href={'temperatura'}>
            <div className={`cursor-pointer hover:shadow-sm hover:scale-[1.01] active:scale-[.98] transition-all p-8 
              row-span-2 col-span-2 md:col-span-1 gap-8 lg:gap-4 from-neutral-100 bg-gradient-to-t md:bg-gradient-to-tl 
              lg:bg-gradient-to-l flex lg:justify-start justify-center rounded-lg`}>
              <div className={`relative w-8 h-64 rounded-2xl border-[1px] border-neutral-200`}>
                <div className={`absolute ${statusT ? '' : 'h-[40%] animate-pulse bg-gradient-to-t from-gray-500'} bottom-0 w-full transition-all duration-500 rounded-full
                                ${temp[1] >= 30 ? 'h-full bg-gradient-to-t from-orange-500 to-red-500' : ''}
                                ${temp[1] < 32 && temp[1] >= 27 ? 'h-[99%] bg-gradient-to-t from-orange-500 via-red-500 to-transparent' : ''}
                                ${temp[1] >= 24 && temp[1] < 27 ? 'h-[85%] bg-gradient-to-t from-blue-500 via-orange-500' : ''}
                                ${temp[1] >= 21 && temp[1] < 24 ? 'h-[77%] bg-gradient-to-t from-blue-500 via-orange-500' : ''}
                                ${temp[1] >= 18 && temp[1] < 21 ? 'h-[60%] bg-gradient-to-t from-blue-500' : ''}
                                ${temp[1] >= 15 && temp[1] < 18 ? 'h-[50%] bg-gradient-to-t from-blue-500' : ''}
                                ${temp[1] >= 12 && temp[1] < 15 ? 'h-[40%] bg-gradient-to-t from-blue-500' : ''}
                                ${temp[1] <= 11 && temp[1] > 6 ? 'h-[30%] bg-gradient-to-t from-blue-500' : ''}
                                ${temp[1] <= 6 ? 'h-[20%] bg-gradient-to-t from-blue-500' : ''}
                                `}>
                </div>
              </div>
              <div className='grid place-content-center'>
                <h1 className='text-center font-bold text-3xl'>
                  Temperatura
                </h1>
                <div className='text-neutral-400 font-bold text-3xl flex items-center justify-center gap-2'>
                  {statusT ? (temp[1] == 0 ? '--' : temp[1]) : <BiLoaderAlt className='animate-spin' />} °C
                </div>
              </div>
            </div>
          </Link>
          <Link href={'aire'}>
            <div className='cursor-pointer hover:shadow-sm hover:scale-[1.01] active:scale-[.98] transition-all p-4 
              bg-neutral-100 grid place-content-center rounded-lg'>
              <h1 className='text-center font-bold'>
                Aire
              </h1>
              <div className='text-neutral-400 font-bold text-3xl flex items-center justify-center gap-2'>
                {statusA ? aire[1] : <BiLoaderAlt className='animate-spin' />} %
              </div>
            </div>
          </Link>
          <button className='hover:shadow-sm hover:scale-[1.01] active:scale-[.98] transition-all p-4 text-center 
            font-bold md:row-start-3 lg:row-start-2 lg:col-end-3 md:col-end-2 col-span-1 bg-neutral-100 grid place-content-center 
            rounded-lg cursor-pointer hover:bg-neutral-200'>
            Apagar Todo
          </button>
          <Link href={'humedad'}>
            <div className='cursor-pointer hover:shadow-sm hover:scale-[1.01] active:scale-[.98] transition-all p-4 col-span-1 
              bg-neutral-100 grid place-content-center rounded-lg'>
              <h1 className='text-center font-bold'>
                Humedad
              </h1>
              <div className='text-neutral-400 font-bold text-3xl flex items-center justify-center gap-2'>
                {statusH ? humedad[1] : <BiLoaderAlt className='animate-spin' />} %
              </div>
            </div>
          </Link>
          <button className='hover:shadow-sm hover:scale-[1.01] active:scale-[.98] transition-all p-4 text-center 
            font-bold col-span-1 bg-neutral-100 grid place-content-center rounded-lg cursor-pointer hover:bg-neutral-200'>
            Encender Todo
          </button>
        </div>
      }
    </Layout>
  );
}
