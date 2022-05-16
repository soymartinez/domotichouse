import Image from "next/image";
import comedor from "../public/comedor.png";
import bano from "../public/banos.png";
import cuarto from "../public/cuarto (1).png";

export default function Tabla() {
  return (
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible ">
        <table className="table text-gray-400 border-separate space-y-6 text-sm">
          <thead className="bg-gray-800 text-gray-500">
            <tr>
              <th className="p-3">Topico</th>
              <th className="p-3 text-left">Valor</th>
              <th className="p-3 text-left">Acción</th>
              <th className="p-3 text-left">Acción</th>
              <th className="p-3 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-800">
              <td className="p-3">
                <div className="flex align-items-center  " alt="unsplash image">
                  <div className="relative rounded-full h-12 w-12">
                    <Image src={comedor} layout="fill"></Image>
                  </div>
                  <div className="ml-3">
                    <div className="">Comedor</div>
                    <div className="text-gray-500">Sensor</div>
                  </div>
                </div>
              </td>
              <td className="p-3">Valor</td>{" "}
              {/*se implementa aca el valor del sensor*/}
              <td className="p-3 font-bold">
                <button className="bg-green-400 text-gray-50 rounded-md px-2">
                  Activo
                </button>
              </td>
              <td className="p-3">
                <button className="bg-red-400 text-gray-50 rounded-md px-2">
                  Desactivado
                </button>
              </td>
              <td className="p-3"></td>
            </tr>
            <tr className="bg-gray-800">
              <td className="p-3">
                <div className="flex align-items-center  " alt="unsplash image">
                  <div className="relative rounded-full h-12 w-12">
                    <Image src={bano} layout="fill"></Image>
                  </div>
                  <div className="ml-3">
                    <div className="">Baño</div>
                    <div className="text-gray-500">Sensor</div>
                  </div>
                </div>
              </td>
              <td className="p-3">Valor</td>
              {/*se implementa aca el valor del sensor*/}
              <td className="p-3 font-bold">
                <button className="bg-green-400 text-gray-50 rounded-md px-2">
                  Activo
                </button>
              </td>
              <td className="p-3">
                <button className="bg-red-400 text-gray-50 rounded-md px-2 ">
                  Desactivado
                </button>
              </td>
              <td className="p-3"></td>
            </tr>
            <tr className="bg-gray-800">
              <td className="p-3">
                <div className="flex align-items-center  " alt="unsplash image">
                  <div className="relative rounded-full h-12 w-12">
                    <Image src={cuarto} layout="fill"></Image>
                  </div>
                  <div className="ml-3">
                    <div className="">Habitación </div>
                    <div className="text-gray-500">Sensor</div>
                  </div>
                </div>
              </td>
              <td className="p-3">Valor</td>
              {/*se implementa aca el valor del sensor*/}
              <td className="p-3 font-bold">
                <button className="bg-green-400 text-gray-50 rounded-md px-2">
                  Activo
                </button>
              </td>
              <td className="p-3">
                <button className="bg-red-400 text-gray-50 rounded-md px-2">
                  Desactivado
                </button>
              </td>
              <td className="p-3"></td>
            </tr>
            <tr className="bg-gray-800">
              <td className="p-3">
                <div className="flex align-items-center  " alt="unsplash image">
                  <div className="relative rounded-full h-12 w-12">
                    <Image src={cuarto} layout="fill"></Image>
                  </div>
                  <div className="ml-3">
                    <div className="">Habitación 2</div>
                    <div className="text-gray-500">Sensor</div>
                  </div>
                </div>
              </td>
              <td className="p-3">Valor</td>{" "}
              {/*se implementa aca el valor del sensor*/}
              <td className="p-3 font-bold">
                <button className="bg-green-400 text-gray-50 rounded-md px-2">
                  Activo
                </button>
              </td>
              <td className="p-3">
                <button
                  className="bg-red-400 text-gray-50 rounded-md px-2 "
                  href="#"
                >
                  Desactivado
                </button>
              </td>
              <td className="p-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
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

          tr td:nth-child(n + 5),
          tr th:nth-child(n + 5) {
            border-radius: 0 0.625rem 0.625rem 0;
          }

          tr td:nth-child(1),
          tr th:nth-child(1) {
            border-radius: 0.625rem 0 0 0.625rem;
          }
        `}
      </style>
    </div>
  );
}
