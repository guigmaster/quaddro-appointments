import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getAppoitments } from '~/features/Appointments/Appointment.api';

import AppointmentsLayout from '~/features/Appointments/components/AppointmentsLayout';

export const meta: MetaFunction = () => ({
  title: 'Agendamentos - Quaddro Appoitments',
});

export const loader: LoaderFunction = async () => {
  const appointments = await getAppoitments();

  return {
    appointments,
  };
};

export default function Appoitments() {
  const { appointments } = useLoaderData();
  return <AppointmentsLayout appointments={appointments} />;
}
