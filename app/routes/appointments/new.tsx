import type { ActionFunction, MetaFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

import { createAppoitments } from '~/features/Appointments/Appointment.api';
import type { CreateAppointmentDTO } from '~/features/Appointments/Appointment.types';

import AppointmentForm from '~/features/Appointments/components/AppointmentForm';

export const meta: MetaFunction = () => ({
  title: 'Cadastrar Agendamento - Quaddro Appoitments',
});

export const action: ActionFunction = async function ({ request }) {
  const body = await request.formData();
  const payload = Object.fromEntries(body) as CreateAppointmentDTO;

  try {
    await createAppoitments(payload);

    return redirect('appointments');
  } catch (error) {
    throw error;
  }
};

export default function () {
  return (
    <div className="flex items-center justify-center p-4 bg-slate-200 rounded mb-8">
      <div className="flex flex-col w-3/4">
        <h1 className="text-2xl mb-4">Cadastar Agendamento</h1>
        <AppointmentForm />
      </div>
    </div>
  );
}
