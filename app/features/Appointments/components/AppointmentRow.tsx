import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Link } from '@remix-run/react';

import type { Appointment } from '../Appointment.types';

type AppointmentRowProps = {
  appointment: Appointment;
};

export default function AppointmentRow({ appointment }: AppointmentRowProps) {
  return (
    <div className="flex items-center w-full border-b-2 p-2 last:border-b-0 mb-1">
      <div className="flex flex-col flex-1 mr-5">
        <span className="text-lg">{appointment.title}</span>
        <div className="flex items-center justify-between">
          <span className="text-md text-zinc-500 italic">
            {appointment.start_time}
          </span>
          <span className="text-md text-zinc-500 italic">
            {appointment.end_time}
          </span>
        </div>
      </div>

      <div className="flex w-[150px] items-center justify-between">
        <Link
          to={`edit/${appointment.id}`}
          title="Editar Agendamento"
          className="flex items-center justify-center p-2 hover:bg-indigo-900 text-blue-700 hover:text-white rounded-md"
        >
          <PencilSquareIcon className="w-7 " />
        </Link>

        <button
          title="Apagar Agendamento"
          className="flex items-center justify-center p-2 hover:bg-red-900 text-red-700 hover:text-white rounded-md"
        >
          <TrashIcon className="w-7 " />
        </button>
      </div>
    </div>
  );
}
