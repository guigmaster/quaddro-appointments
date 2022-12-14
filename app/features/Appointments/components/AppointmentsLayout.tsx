import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Link, Outlet, useLocation } from '@remix-run/react';

import type { Appointment } from '../Appointment.types';

import AppointmentRow from './AppointmentRow';
import AppointmentSearchForm from './AppointmentSearchForm';

type AppointmentsLayoutPros = {
  appointments: Appointment[];
};

export default function AppointmentsLayout({
  appointments,
}: AppointmentsLayoutPros) {
  const { pathname } = useLocation();

  const hasAppointmentForm =
    pathname.includes('/new') || pathname.includes('/edit');

  return (
    <main className="relative w-full h-full bg-white">
      <header className="fixed t-0 w-full h-12 shadow z-10">
        <div className="container mx-auto h-full px-8 flex items-center">
          <h1>Agendamentos</h1>
        </div>
      </header>

      <div className="flex flex-col container mx-auto px-8 h-full pt-16">
        <Outlet />

        <div className="flex items-center justify-between">
          <h3 className="flex flex-col text-2xl">
            Agendamentos
            <span className="text-sm mt-1">38 Agendamento(s) no total</span>
          </h3>

          {!hasAppointmentForm && (
            <Link
              to="new"
              className="flex items-center justify-center p-3 bg-blue-800 hover:bg-blue-600 rounded text-white"
            >
              <PlusCircleIcon className="w-5 mr-2" />
              <span>Agendar</span>
            </Link>
          )}
        </div>

        {!hasAppointmentForm && <AppointmentSearchForm />}

        <div className="mt-8">
          {appointments.map(appointment => (
            <AppointmentRow key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>
    </main>
  );
}
