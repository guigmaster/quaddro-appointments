import type { MetaFunction } from '@remix-run/node';
import AppointmentForm from '~/features/Appointments/components/AppointmentForm';

export const meta: MetaFunction = () => ({
  title: 'Cadastrar Agendamento - Quaddro Appoitments',
});

export default function () {
  return (
    <div className="flex flex-1 items-center justify-center p-4 bg-slate-200 rounded mb-8">
      <div className="flex flex-col w-3/4">
        <h1 className="text-2xl mb-4">Cadastar Agendamento</h1>
        <AppointmentForm />
      </div>
    </div>
  );
}
