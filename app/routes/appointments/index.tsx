import type { MetaFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';

import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

export const meta: MetaFunction = () => ({
  title: 'Agendamentos - Quaddro Appoitments',
});

type appoitment = {
  id: number;
  title: string;
  start_time: string;
  end_time: string;
};

const appoitments: appoitment[] = [
  {
    id: 1,
    title: 'Teste de Agendamento',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 2,
    title: 'Teste de Agendamento 2',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 3,
    title: 'Teste de Agendamento 3',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 4,
    title: 'Teste de Agendamento 4',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
  {
    id: 5,
    title: 'Teste de Agendamento 5',
    start_time: '2022-09-11 09:00:00',
    end_time: '2022-09-11 09:30:00',
  },
];

export default function Appoitments() {
  return (
    <main className="relative w-full h-full bg-white">
      <header className="fixed t-0 w-full h-12 shadow z-10">
        <div className="container mx-auto h-full px-8 flex items-center">
          <h1>Agendamentos</h1>
        </div>
      </header>

      <div className="flex flex-col container mx-auto px-8 h-full pt-16">
        <div className="flex items-center justify-between">
          <h3 className="flex flex-col text-2xl">
            Agendamentos
            <span className="text-sm mt-1">38 Agendamento(s) no total</span>
          </h3>

          <button className="flex items-center justify-center p-3 bg-blue-800 hover:bg-blue-600 rounded text-white">
            <PlusCircleIcon className="w-5 mr-2" />
            <span>Agendar</span>
          </button>
        </div>

        <div className="p-4 bg-slate-200 rounded mt-8">
          <Form className="flex">
            <div className="mr-2">
              <label htmlFor="orderBy">Ordernar por</label>
              <select
                id="orderBy"
                name="orderBy"
                className="mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 h-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="title">Título</option>
                <option value="start_time">Horário Inicial</option>
                <option value="end_time">Horário Final</option>
              </select>
            </div>
            <div className="flex items-center self-end justify-between w-full h-10 p-2 border rounded border-gray-300 bg-white">
              <input
                type="text"
                placeholder="Buscar Agendamento..."
                className="flex flex-1 text-zinc-600"
              />
              <button
                type="button"
                className="flex items-center h-7 w-7 p-1  ml-2 justify-center bg-blue-800 hover:bg-blue-600 rounded"
              >
                <MagnifyingGlassIcon className="text-white" />
              </button>
            </div>
          </Form>
        </div>

        <div className="mt-8">
          {appoitments.map(appoitment => (
            <div
              key={appoitment.id}
              className="flex items-center w-full border-b-2 p-2 last:border-b-0 mb-1"
            >
              <div className="flex flex-col flex-1 mr-5">
                <span className="text-lg">{appoitment.title}</span>
                <div className="flex items-center justify-between">
                  <span className="text-md text-zinc-500 italic">
                    {appoitment.start_time}
                  </span>
                  <span className="text-md text-zinc-500 italic">
                    {appoitment.end_time}
                  </span>
                </div>
              </div>

              <div className="flex w-[150px] items-center justify-between">
                <button
                  title="Editar Agendamento"
                  className="flex items-center justify-center p-2 hover:bg-indigo-900 text-blue-700 hover:text-white rounded-md"
                >
                  <PencilSquareIcon className="w-7 " />
                </button>

                <button
                  title="Apagar Agendamento"
                  className="flex items-center justify-center p-2 hover:bg-red-900 text-red-700 hover:text-white rounded-md"
                >
                  <TrashIcon className="w-7 " />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
