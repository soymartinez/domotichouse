import Image from "next/image";
import Sala from "public/sala.png"
import Comedor from "public/comedor.png";
import Bano from "public/banos.png";
import Cuarto from "public/cuarto.png";
import Jardin from "public/jardin.png";
import { BiLoaderAlt, BiPowerOff } from "react-icons/bi";
import { AiFillFire } from "react-icons/ai";
import { Publisher, Subscriber } from "connections/mqtt";

export default function Table({ value, sign }) {

  const [status1, valueLR] = Subscriber(`domotic/livingroom/${value}`);
  const [status2, valueDR] = Subscriber(`domotic/diningroom/${value}`);
  const [status3, valueBR] = Subscriber(`domotic/bathroom/${value}`);
  const [status4, valueR1] = Subscriber(`domotic/room1/${value}`);
  const [status5, valueR2] = Subscriber(`domotic/room2/${value}`);
  const [status6, valueGD] = Subscriber(`domotic/garden/${value}`);

  const roomsData = [
    { image: Sala, topico: 'Sala', status: status1, habitacion: valueLR[0], value: valueLR[1] },
    { image: Comedor, topico: 'Comedor', status: status2, habitacion: valueDR[0], value: valueDR[1] },
    { image: Bano, topico: 'Baño', status: status3, habitacion: valueBR[0], value: valueBR[1] },
    { image: Cuarto, topico: 'Habitación', status: status4, habitacion: valueR1[0], value: valueR1[1] },
    { image: Cuarto, topico: 'Habitación 2', status: status5, habitacion: valueR2[0], value: valueR2[1] },
    { image: Jardin, topico: 'Jardin', status: status6, habitacion: valueGD[0], value: valueGD[1] },
  ]

  return (
    <>
      <table className="table text-gray-400 border-separate space-y-6 lg:text-lg text-sm">
        <thead className="bg-neutral-100 text-gray-500">
          <tr>
            <th className="p-3">Topico</th>
            <th className="p-3 text-left">Valor</th>
            <th className="p-3 text-left">Acción</th>
            <th className="p-3 text-left">Acción</th>
          </tr>
        </thead>
        <tbody>
          {
            roomsData.map(({ image, topico, value, habitacion, status }) => (
              <tr className="bg-neutral-100" key={topico}>
                <td className="p-3">
                  <div className="flex align-items-center" alt="unsplash image">
                    <div className="relative rounded-full h-12 w-12">
                      <Image src={image} priority layout="fill"></Image>
                    </div>
                    <div className="ml-3">
                      <div className="">{topico}</div>
                      <div className="text-gray-500">Sensor</div>
                    </div>
                  </div>
                </td>
                <td className="p-3 font-bold lg:w-40 md:w-32">
                  <div className='flex items-center gap-2'>
                    {status ? value : <BiLoaderAlt className='animate-spin' />} {sign}
                  </div>
                </td>
                <td className="p-3 font-bold">
                  <button className="active:scale-[.98] hover:scale-[1.03] transition-all bg-green-400 text-gray-50 rounded-md px-2 p-1 align-middle">
                    <div className='flex justify-center gap-2 items-center'>
                      <span className='hidden sm:block'>Activo</span> <AiFillFire />
                    </div>
                  </button>
                </td>
                <td className="p-3">
                  <button key={topico} onClick={() => Publisher(`${habitacion}`, '--')} className="active:scale-[.98] hover:scale-[1.03] transition-all bg-red-400 text-gray-50 rounded-md px-2 p-1 align-middle">
                    <div className='flex justify-center gap-2 items-center'>
                      <span className='hidden sm:block'>Desactivado</span> <BiPowerOff />
                    </div>
                  </button>
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

          tr td:nth-child(n + 4),
          tr th:nth-child(n + 4) {
            border-radius: 0 0.625rem 0.625rem 0;
          }

          tr td:nth-child(1),
          tr th:nth-child(1) {
            border-radius: 0.625rem 0 0 0.625rem;
          }
        `}
      </style>
    </>
  );
}
