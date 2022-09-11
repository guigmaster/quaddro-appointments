import { Form } from '@remix-run/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function AppointmentSearchForm() {
  return (
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
  );
}
